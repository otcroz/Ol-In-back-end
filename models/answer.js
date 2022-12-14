const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = mongoose.Schema({
  questionID:{ // 질문
    type: Schema.Types.ObjectId,
    ref:'Question'
  },
  content: { // 내용
      type: String,
  },
  writer:{ //답변자
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

const Answer = mongoose.model('Answer', answerSchema)

module.exports = { Answer }