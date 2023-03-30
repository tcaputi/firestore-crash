import { firebaseAdminDb } from "./common.js";

async function updateTournament() {
  await firebaseAdminDb.runTransaction(async (tx) => {
    const tournamentRef = firebaseAdminDb
      .collection("tournaments")
      .doc("crashTest");
    const tournamentDoc = await tx.get(tournamentRef);

    const tournament = tournamentDoc.data();
    tournament.createTime += 1;
    tx.set(tournamentRef, tournament);
  });
}

async function main() {
  console.log("racing transactions");
  await Promise.all([
    updateTournament(),
    updateTournament(),
    updateTournament(),
  ]);
  console.log("done racing transactions");
}

main();
