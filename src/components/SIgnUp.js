import React from "react"

function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <label>
          <div>
            First Name
            <input type="text" name="firstname" placeholder="Firstname" />
          </div>
          <div>
            Second Name
            <input type="text" name="secondname" placeholder="Secondname" />
          </div>
          <div>
            Username
            <input type="text" name="username" placeholder="Username" />
          </div>
        </label>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
            <input type="password" name="password" placeholder="Confirm Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;