export const getFirstChildNode = node => {
  const childNodes = node.childNodes

  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType === 1) {
      return childNodes[i]
    }
  }
}

export const checkExpressionHasData = (data, expression) => {
  for (let key in data) {
    if (expression.includes(key)) {
      return {
        key,
        expression
      }
    } else {
      return null
    }
  }
}

const regStrFn = /(.+?)\((.+?)\)/
export const checkFunctionHasArgs = str => {
  const matched = str.match(regStrFn)

  if (matched) {
    const args = matched[2]
      .split(',')
      .map(arg => arg.trim())
      .map(arg => {
        return checkIsString(arg) ? arg.slice(1, -1) : Number(arg)
      })

    return {
      methodName: matched[1],
      args
    }
  }
}

const regString = /\'(.+?)\'/
export const checkIsString = str => {
  return regString.test(str)
}
