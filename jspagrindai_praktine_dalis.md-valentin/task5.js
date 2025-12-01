const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

const processedNotifications = notifications.map((notification) => {
  const newNotification = { ...notification };
  if (newNotification.read === true) {
    newNotification.messageType = "read";
  } else if (newNotification.priority === 3) {
    newNotification.messageType = "critical";
  } else if (newNotification.priority === 2) {
    newNotification.messageType = "warning";
  } else if (newNotification.priority === 1) {
    newNotification.messageType = "normal";
  } else {
    newNotification.messageType = "unknown";
  }
  return newNotification;
});

console.log(processedNotifications);
