module.exports = {
  name: "out",
  onPrefix: false,
  info: "Out of the group",
  dev: "Jonell Magallanes",
  usedby: 2,
  cooldowns: 20,

onLaunch: async function({ api, event, target }) {
      if (!target[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
      if (!isNaN(target[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
        }
}