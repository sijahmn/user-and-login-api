import User from '../model/user.model'
import { getUser } from '../service/user.service'

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find()
    if (!users) throw Error('No users exist')
    res.json(users)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = getUser(id)
    if (!user) throw Error('User does not exist')
    res.json(user)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body)
    res.status(201).json(updatedUser)
  } catch (error) {
    console.log('something went wrong', error)
    res.status(400).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await deleteUser(req.params.id)
    res.status(201).json(deletedUser)
  } catch (error) {
    console.log('something went wrong', error)
    res.status(400).json(error)
  }
}
