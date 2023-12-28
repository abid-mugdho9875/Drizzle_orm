import { db } from "./db/db";
import { users } from "./db/schema/user.schema"; // Replace with the correct path

const runQuery = async () => {
  const result = await db.query.users.findFirst({
    with:{
        profile:true;
    }
  })
  console.log(JSON.stringify(result, null, 2));

  const selectResult = await db.select().from(users);
  console.log(JSON.stringify(selectResult, null, 2));
};
runQuery();
