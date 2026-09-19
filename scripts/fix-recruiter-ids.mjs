import "dotenv/config";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const AUTH_DB_NAME = process.env.AUTH_DB_NAME;

if (!MONGODB_URI || !AUTH_DB_NAME) {
  console.error("Missing MONGODB_URI or AUTH_DB_NAME in .env");
  process.exit(1);
}

const COMPANY_NAMES = [
  "Adobe",
  "Airbnb",
  "Amazon",
  "Apple",
  "Google",
  "Meta",
  "Microsoft",
  "Netflix",
  "Nvidia",
  "Spotify",
  "Tesla",
  "Uber",
];

async function main() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = client.db(AUTH_DB_NAME);
  const usersCollection = db.collection("user");
  const companiesCollection = db.collection("companies");

  let updated = 0;
  const skippedAlreadySet = [];
  const skippedNoRecruiter = [];
  const skippedNoCompany = [];

  for (const name of COMPANY_NAMES) {
    const company = await companiesCollection.findOne({ name });
    if (!company) {
      skippedNoCompany.push(name);
      console.warn(`Skipped "${name}": no company found with that name.`);
      continue;
    }

    if (company.recruiterId) {
      skippedAlreadySet.push(name);
      console.log(`Skipped "${name}": recruiterId already set ("${company.recruiterId}").`);
      continue;
    }

    const recruiter = await usersCollection.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
      role: "recruiter",
    });

    if (!recruiter) {
      skippedNoRecruiter.push(name);
      console.warn(`Skipped "${name}": no matching recruiter user found.`);
      continue;
    }

    await companiesCollection.updateOne(
      { _id: company._id },
      { $set: { recruiterId: recruiter._id.toString() } }
    );
    updated++;
    console.log(`Updated "${name}": recruiterId set to ${recruiter._id.toString()}.`);
  }

  console.log("\n--- Summary ---");
  console.log(`Updated: ${updated}`);
  console.log(
    `Skipped (already had recruiterId): ${skippedAlreadySet.length}${
      skippedAlreadySet.length ? ` [${skippedAlreadySet.join(", ")}]` : ""
    }`
  );
  console.log(
    `Skipped (no matching recruiter): ${skippedNoRecruiter.length}${
      skippedNoRecruiter.length ? ` [${skippedNoRecruiter.join(", ")}]` : ""
    }`
  );
  console.log(
    `Skipped (no matching company): ${skippedNoCompany.length}${
      skippedNoCompany.length ? ` [${skippedNoCompany.join(", ")}]` : ""
    }`
  );

  await client.close();
}

main().catch((err) => {
  console.error("Fix script failed:", err);
  process.exit(1);
});
