import * as roles_auth_decorator from "./roles-auth.decorator"
// @ponicode
describe("roles_auth_decorator.Roles", () => {
    test("0", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles(["user name"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles(["user-name"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles([123, "username", "user_name", "user123"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles(["user123", "user_name", "username", "user_name"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles(["username", "user name", 123, "username"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            roles_auth_decorator.Roles([])
        }
    
        expect(callFunction).not.toThrow()
    })
})
