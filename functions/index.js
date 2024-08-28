const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createUser = functions.https.onCall(async (data, context) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: data.email,
      password: data.password,
    });
    return { uid: userRecord.uid };
  } catch (error) {
    return { error: error.message };
  }
});
