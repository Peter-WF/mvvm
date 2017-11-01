/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-13 15:32
 * @description   基于 Levenshtein distance 思路编写 Javascript 版本
 */

function getMinDistance(foo, bar) {
  const map = initMap(foo, bar)
  console.log(map.getValue(foo.length, bar.length))
  console.table(map.valueMap)
}

function initMap(foo, bar) {
  const map = []
  const fooLength = foo.length
  const barLength = bar.length

  map.valueMap = []

  // 创建二维对象
  for (let i = 0; i < fooLength + 1; i++) {
    map.valueMap[i] = [i]
    // 初始化第一列
    map[i] = [{
      value: i,
      move: [],
      path: `start => (${i},${0})`
    }]
  }

  // 初始化第一行
  for (let i = 0; i < barLength + 1; i++) {
    map.valueMap[0][i] = i
    map[0][i] = {
      value: i,
      move: [],
      path: `start => (${0},${i})`
    }
  }

  // 输出 map
  console.table(map.valueMap)

  // 获取 foo(1,i) => bar(1,j)
  map.getValue = function(row, column) {
    if (this[row][column] != null) {
      return this[row][column]
    } else {
      const x1y = this.getValue(row - 1, column)
      const xy1 = this.getValue(row, column - 1)
      const x1y1 = this.getValue(row - 1, column - 1)

      const moveStrategy = [{
        value: x1y.value + 1,
        move: x1y.move.concat([-1]),// 代表 "将 foo 删除一位"
        path: `${x1y.path} => (${row},${column})`
      }, {
        value: xy1.value + 1, // 代表 "将 bar 的一位补于 foo"
        move: xy1.move.concat([1]),
        path: `${xy1.path} => (${row},${column})`
      }, {
        value: x1y1.value + (foo[row - 1] === bar[column - 1] ? 0 : 1),
        move: x1y1.move.concat([0]),// 代表 "将 bar 的值替换与 foo"
        path: `${x1y1.path} => (${row},${column})`
      }].sort((a, b) => {
        return a.value - b.value
      })[0]

      // 缓存数据并返回
      this.valueMap[row][column] = moveStrategy.value
      return this[row][column] = moveStrategy
    }
  }

  return map
}





