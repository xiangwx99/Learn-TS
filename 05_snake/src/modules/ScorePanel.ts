// 定义记分牌的类
class ScorePanel {
  // score, level用来记录分数和等级
  score = 0
  level = 1
  // 分数和等级所在元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement
  // 限制等级
  maxLevel: number
  // 表示多少分升级
  upScore: number
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }
  // 设置一个加分方法
  addScore() {
    // 使分数自增level
    this.score++
    this.scoreEle.innerHTML = this.score + ''
    // 判断分数是多少
    if(this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  // 提升等级
  levelUp() {
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}
// 测试代码
// const scorePanel = new ScorePanel(100, 2)
// for(let i = 0; i < 200; i++) {
//   scorePanel.addScore()
// }

export default ScorePanel