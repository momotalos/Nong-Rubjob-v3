// ============ FIRESTORE DATA LAYER ============
// All Firestore CRUD operations, scoped to authenticated user's UID.
// Uses fire-and-forget writes for non-critical saves to keep UI responsive.
//
// Firestore structure:
//   users/{uid}                        → { name, email, role, createdAt }
//   users/{uid}/sessions/{sessionId}   → { title, messages[], phase, lastSignal, createdAt, updatedAt }
//   users/{uid}/data/sanctuary         → { plants[], vault[], milestones{}, daysVisited[], ... }

const DB = {
  // ---- User Profile ----
  async loadProfile(uid) {
    try {
      const doc = await db.collection('users').doc(uid).get();
      return doc.exists ? doc.data() : null;
    } catch (e) {
      console.error('DB.loadProfile error:', e);
      return null;
    }
  },

  async saveProfile(uid, data) {
    try {
      await db.collection('users').doc(uid).set(data, { merge: true });
    } catch (e) {
      console.error('DB.saveProfile error:', e);
    }
  },

  // ---- Chat Sessions ----
  async loadSessions(uid) {
    try {
      const snapshot = await db.collection('users').doc(uid)
        .collection('sessions')
        .orderBy('updatedAt', 'desc')
        .get();
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
    } catch (e) {
      console.error('DB.loadSessions error:', e);
      return [];
    }
  },

  async saveSession(uid, session) {
    try {
      const { id, ...data } = session;
      await db.collection('users').doc(uid)
        .collection('sessions').doc(id)
        .set(data);
    } catch (e) {
      console.error('DB.saveSession error:', e);
    }
  },

  async deleteSession(uid, sessionId) {
    try {
      await db.collection('users').doc(uid)
        .collection('sessions').doc(sessionId)
        .delete();
    } catch (e) {
      console.error('DB.deleteSession error:', e);
    }
  },

  // ---- Sanctuary (Garden, Vault, Milestones) ----
  async loadSanctuary(uid) {
    try {
      const doc = await db.collection('users').doc(uid)
        .collection('data').doc('sanctuary')
        .get();
      return doc.exists ? doc.data() : null;
    } catch (e) {
      console.error('DB.loadSanctuary error:', e);
      return null;
    }
  },

  async saveSanctuary(uid, data) {
    try {
      await db.collection('users').doc(uid)
        .collection('data').doc('sanctuary')
        .set(data);
    } catch (e) {
      console.error('DB.saveSanctuary error:', e);
    }
  }
};
