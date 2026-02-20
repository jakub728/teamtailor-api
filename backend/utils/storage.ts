import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "database", "users.json");

export const saveToJson = async (data: any) => {
  try {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(error);
  }
};

export const getFromJson = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};
