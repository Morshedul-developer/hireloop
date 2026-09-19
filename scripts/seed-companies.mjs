import "dotenv/config";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const AUTH_DB_NAME = process.env.AUTH_DB_NAME;

if (!MONGODB_URI || !AUTH_DB_NAME) {
  console.error("Missing MONGODB_URI or AUTH_DB_NAME in .env");
  process.exit(1);
}

const COMPANIES = [
  {
    name: "Adobe",
    industry: "Technology",
    website: "https://adobe.com",
    location: "San Jose, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/hxm1B3w9/adobe.png",
    description:
      "Adobe develops software for content creation, document management, and digital marketing, including Photoshop, Acrobat, and Creative Cloud.",
  },
  {
    name: "Airbnb",
    industry: "E-Commerce",
    website: "https://airbnb.com",
    location: "San Francisco, USA",
    employeeRange: "501-1000 employees",
    logo: "https://i.ibb.co/mCnw57Zv/airbnb.png",
    description:
      "Airbnb operates an online marketplace that connects hosts offering short-term lodging with travelers seeking accommodations.",
  },
  {
    name: "Amazon",
    industry: "E-Commerce",
    website: "https://amazon.com",
    location: "Seattle, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/tM4RDfDs/amazon.png",
    description:
      "Amazon runs a global e-commerce platform and operates Amazon Web Services, a major cloud computing provider.",
  },
  {
    name: "Apple",
    industry: "Technology",
    website: "https://apple.com",
    location: "Cupertino, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/MyT0tbY9/apple.png",
    description:
      "Apple designs and sells consumer electronics, including the iPhone and Mac, along with software and online services.",
  },
  {
    name: "Google",
    industry: "Technology",
    website: "https://google.com",
    location: "Mountain View, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/LD220LnN/google.png",
    description:
      "Google provides internet search, advertising, cloud computing, and a range of software products and hardware devices.",
  },
  {
    name: "Meta",
    industry: "Media & Entertainment",
    website: "https://meta.com",
    location: "Menlo Park, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/RT6ydtkC/meta.png",
    description:
      "Meta operates social networking platforms including Facebook and Instagram, and develops virtual and augmented reality products.",
  },
  {
    name: "Microsoft",
    industry: "Developer Tools",
    website: "https://microsoft.com",
    location: "Redmond, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/hxGc5x0V/microsoft.png",
    description:
      "Microsoft develops operating systems, productivity software, and cloud services, including Windows, Office, and Azure.",
  },
  {
    name: "Netflix",
    industry: "Media & Entertainment",
    website: "https://netflix.com",
    location: "Los Gatos, USA",
    employeeRange: "501-1000 employees",
    logo: "https://i.ibb.co/d0HsSVJ9/netflix.png",
    description:
      "Netflix operates a subscription streaming service offering films and television series, and produces original content.",
  },
  {
    name: "Nvidia",
    industry: "Manufacturing",
    website: "https://nvidia.com",
    location: "Santa Clara, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/Hf4Jkkny/nvidia.png",
    description:
      "Nvidia designs graphics processing units and chips used in gaming, data centers, and artificial intelligence workloads.",
  },
  {
    name: "Spotify",
    industry: "Media & Entertainment",
    website: "https://spotify.com",
    location: "Stockholm, Sweden",
    employeeRange: "501-1000 employees",
    logo: "https://i.ibb.co/gbNQN58x/spotify.png",
    description:
      "Spotify operates a subscription-based audio streaming service offering music, podcasts, and audiobooks.",
  },
  {
    name: "Tesla",
    industry: "Manufacturing",
    website: "https://tesla.com",
    location: "Austin, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/LzCbhSZ7/tesla.png",
    description:
      "Tesla designs and manufactures electric vehicles, battery energy storage systems, and solar products.",
  },
  {
    name: "Uber",
    industry: "Technology",
    website: "https://uber.com",
    location: "San Francisco, USA",
    employeeRange: "1000+ employees",
    logo: "https://i.ibb.co/x862B1Cf/uber.png",
    description:
      "Uber operates a platform connecting riders with drivers, and offers food delivery and freight logistics services.",
  },
];

async function main() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();

  const db = client.db(AUTH_DB_NAME);
  const usersCollection = db.collection("user");
  const companiesCollection = db.collection("companies");

  const recruiters = await usersCollection
    .find({ role: "recruiter" })
    .toArray();

  const recruiterByName = new Map();
  for (const recruiter of recruiters) {
    if (typeof recruiter.name === "string") {
      recruiterByName.set(recruiter.name.toLowerCase(), recruiter._id);
    }
  }

  let inserted = 0;
  const skippedNoRecruiter = [];
  const skippedExisting = [];

  for (const company of COMPANIES) {
    const existing = await companiesCollection.findOne({
      name: company.name,
    });
    if (existing) {
      skippedExisting.push(company.name);
      console.warn(`Skipped "${company.name}": already exists in companies collection.`);
      continue;
    }

    const recruiterId = recruiterByName.get(company.name.toLowerCase());
    if (!recruiterId) {
      skippedNoRecruiter.push(company.name);
      console.warn(`Skipped "${company.name}": no matching recruiter user found.`);
      continue;
    }

    await companiesCollection.insertOne({
      name: company.name,
      industry: company.industry,
      website: company.website,
      location: company.location,
      employeeRange: company.employeeRange,
      logo: company.logo,
      description: company.description,
      status: "pending",
      recruiterId: recruiterId.toString(),
      createdAt: new Date(),
    });
    inserted++;
  }

  console.log("\n--- Summary ---");
  console.log(`Inserted: ${inserted}`);
  console.log(
    `Skipped (already existed): ${skippedExisting.length}${
      skippedExisting.length ? ` [${skippedExisting.join(", ")}]` : ""
    }`
  );
  console.log(
    `Skipped (no matching recruiter): ${skippedNoRecruiter.length}${
      skippedNoRecruiter.length ? ` [${skippedNoRecruiter.join(", ")}]` : ""
    }`
  );

  await client.close();
}

main().catch((err) => {
  console.error("Seed script failed:", err);
  process.exit(1);
});
