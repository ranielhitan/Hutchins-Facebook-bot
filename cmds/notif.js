module.exports = {
  name: "notif",
  usedby: 2,
  onPrefix: false,
  dev: "Raniel Hiyan",
  info: "Sending notification from developer",
  cooldowns: 30,
  onLaunch: async function({ api, event, target  }) {
    const content = target.join(" ");
    if (!content) return api.sendMessage("Please enter a notification message.", event.threadID);

    const adminID = "your_admin_id_here";
    if (event.senderID !== adminID) {
      return api.sendMessage("You do not have permission to use this command. Only admins can execute it.", event.threadID);
    }

    let senderInfo = await api.getUserInfo(event.senderID);
    let senderName = senderInfo[event.senderID].name;

    const jonell = `👤 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻\n━━━━━━━━━━━━━━━━━━\nContent:\n${content}\n\nDeveloper: ${senderName}`;

    try {
      let threads = await api.getThreadList(500, null, ['INBOX']); 
      let threadIDs = threads.map(thread => thread.threadID);
      threadIDs.forEach(id => {
        api.sendMessage(jonell, id);
      });

      api.sendMessage(`📝 𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗧𝗵𝗿𝗲𝗮𝗱𝘀 𝗥𝗲𝘀𝘂𝗹𝘁 \n━━━━━━━━━━━━━━━━━━\nNotification sent to ${threadIDs.length} threads.`, event.threadID);
    } catch (error) {
      console.error('[ERROR]', error);
      api.sendMessage('An error occurred while sending the notifications.', event.threadID);
    }
  }
};
