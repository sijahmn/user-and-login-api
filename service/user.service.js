export const getUser =async (id)=>{
    const user =  await User.findById(id).select('-password');
    return user
}

export const getUserFromEmail =async (email)=>{
    const user =  await User.findOne({email}).select('-password');
    return user
}

export const updatedUser =async (id,body)=>{
    const { name, email } = body
const updatedData =  await User.findOneAndUpdate(
    { _id: { $eq: id } },
    { name, email }, 
    { new: true } 
  )
  return updatedData
}

export const deleteUser =async (id)=>{
const deletedUser =  User.findOneAndDelete({ _id: req.params.id })
return deletedUser
}