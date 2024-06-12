import { h } from "snabbdom"

const initialState = {
    template: "",
    on: {}
}

const createReducer = args => (acc, current, index) => {

    const currentArg = args[index];

    if (currentArg && currentArg.type === "event") {
        return { ...acc, on: { click: currentArg.click } }
    }

    return {
        ...acc,
        template: acc.template + current + (args[index] || "")
    }
}

const createElement = tagName => (strings, ...args) => {
    const { template, on } = strings.reduce(createReducer(args), initialState)

    return {
        type: "element",
        template: h(tagName, { on }, template)
    }
}


export const div = createElement("div")
export const p = createElement("p")
export const h1 = createElement("h1")
