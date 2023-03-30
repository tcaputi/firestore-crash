import { firebaseAdminDb } from "./common.js";
import EXAMPLE_TOURNAMENT from "./test-data.json" assert { type: "json" };

async function main() {
  console.log("creating initial test data");

  await firebaseAdminDb
    .collection("tournaments")
    .doc("crashTest")
    .set(EXAMPLE_TOURNAMENT);

  console.log("initial test data created");
}

main();
