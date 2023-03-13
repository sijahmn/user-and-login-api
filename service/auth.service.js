export const registerUser =async (name,email,hashedPassword)=>{
    const newUser = new User({
        name,
        email,
        password: hashedPassword
      });
  
      const savedUser = await newUser.save();
      return savedUser  
}