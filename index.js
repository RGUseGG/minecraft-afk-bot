const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_SERVER || '191.96.231.2',
    port: parseInt(process.env.MC_PORT) || 15336,
    username: process.env.MC_USERNAME || 'AFK_Bot',
    version: false
  });

  bot.on('spawn', () => {
    console.log('🤖 Bot সার্ভারে যুক্ত হয়েছে!');
    bot.chat('/login creativeafkbot');
  });

  bot.on('end', () => {
    console.log('🔄 Bot disconnected! Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('❌ Error:', err);
  });
}

createBot();
