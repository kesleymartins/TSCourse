let profile: { name: string, age: number, password: (string | null) } = {
  name: "Doctor Who",
  age: 900,
  password: null
}

console.log(profile)

profile.password = "123456"

console.log(profile)
