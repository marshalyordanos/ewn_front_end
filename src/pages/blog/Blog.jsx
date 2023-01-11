import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Header } from "../../components/header/Header"

export const Blog = () => {
  const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
    <Header />
      <Card posts={posts} />
    </>
  )
}
