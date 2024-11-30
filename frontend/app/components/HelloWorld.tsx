"use client";
import { useState } from 'react'
import { useReadContract, useWriteContract } from 'wagmi'
import { HELLO_WORLD_ADDRESS } from '@config/contracts'
import HelloWorldABI from '@contracts/HelloWorld.sol/HelloWorld.json'

export function HelloWorld() {
  const [newMessage, setNewMessage] = useState('')
  
  const { data: message, refetch } = useReadContract({
    address: HELLO_WORLD_ADDRESS,
    abi: HelloWorldABI.abi,
    functionName: 'getMessage',
  })

  const { writeContract } = useWriteContract()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await writeContract({
        address: HELLO_WORLD_ADDRESS,
        abi: HelloWorldABI.abi,
        functionName: 'setMessage',
        args: [newMessage]
      })
      setNewMessage('')
      await refetch()
    } catch (error) {
      console.error('Error setting message:', error)
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Hello World Contract</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Current Message:</h3>
        <p className="p-2 bg-gray-100 rounded">{message as string}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="newMessage" className="block text-sm font-medium mb-1">
            New Message:
          </label>
          <input
            type="text"
            id="newMessage"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter new message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update Message
        </button>
      </form>
    </div>
  )
}
