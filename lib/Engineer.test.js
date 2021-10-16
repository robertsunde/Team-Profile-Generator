const Engineer = require("./Engineer")

// @ponicode
describe("getGithub", () => {
    let inst

    beforeEach(() => {
        inst = new Engineer("George", "bc23a9d531064583ace8f67dad60f6bb", "something@example.com", "username")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getGithub()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRole", () => {
    let inst

    beforeEach(() => {
        inst = new Engineer("George", "bc23a9d531064583ace8f67dad60f6bb", "user1+user2@mycompany.com", "user name")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getRole()
        }
    
        expect(callFunction).not.toThrow()
    })
})
