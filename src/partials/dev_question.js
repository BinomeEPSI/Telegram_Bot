let { handleQuestions } = require('../helper/questionsHandler')

const regex = require('../helper/variables').regex

let bot

module.exports.init = (_bot) => {
  bot = _bot
}

module.exports.getName = () => {
  return __filename
}

module.exports.run = function (msg, chats) {
  return handleQuestions(true, 'devQuestionCount', 'currentQuestion', 'scoreDev', 'answeredQuestions', regex.dev_question, bot, msg, chats)
}
