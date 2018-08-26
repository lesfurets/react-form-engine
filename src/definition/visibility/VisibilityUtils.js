import {Visibility} from "./Visibility";

export class VisibilityBuilder {
    constructor(isVisible) {
        this.isVisible = isVisible;
    }

    when(predicate) {
        return new Visibility(this.isVisible, predicate);
    }

    static hasVisibility(isVisible) {
        return new VisibilityBuilder(isVisible)
    }

    static isVisible() {
        return VisibilityBuilder.hasVisibility(true);
    }

    static isNotVisible() {
        return VisibilityBuilder.hasVisibility(false);
    }
}

// TODO understant why this is not working in tests
// export const VisibilityUtils = new Proxy({}, {
//     get(target, prop) {
//         switch (prop) {
//             case "isVisible":
//                 return VisibilityBuilder.hasVisibility(true);
//             case "isNotVisible":
//                 return VisibilityBuilder.hasVisibility(false);
//         }
//         throw new Error("Param not supported : " + prop);
//     },
// });