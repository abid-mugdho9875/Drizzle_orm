import { db } from "./db/db";
import { profiles } from "./db/schema/user.schema"; // Replace with the correct path

const runQuery = async () => {
  //   const result = await db.insert(users).values({
  //     fullname: "John",
  //     phone: "123456",
  //     address: "123 Main S",
  //     score: 90,
  //     createdAt: new Date(),
  //   });
  //   console.log(JSON.stringify(result, null, 2));

  //   const selectResult = await db.select().from(users);
  //   console.log(JSON.stringify(selectResult, null, 2));

  const result = await db.insert(profiles).values({
    bio: "A brief bio",
    userId: 4,
  });
  console.log(JSON.stringify(result, null, 2));

  const selectResult = await db.select().from(profiles);
  console.log(JSON.stringify(selectResult, null, 2));
};
runQuery();
