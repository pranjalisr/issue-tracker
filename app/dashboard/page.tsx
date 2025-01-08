'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import CreateIssueForm from './create-issue-form'

interface Issue {
  id: number
  title: string
  description: string
  status: 'open' | 'in-progress' | 'closed'
}

export default function Dashboard() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/')
    }
    // In a real app, you would fetch issues from an API here
    setIssues([
      { id: 1, title: 'Bug in login page', description: 'Users unable to login', status: 'open' },
      { id: 2, title: 'Feature request: Dark mode', description: 'Add dark mode to the app', status: 'in-progress' },
      { id: 3, title: 'Performance issue in dashboard', description: 'Dashboard loading slowly', status: 'closed' },
    ])
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  const handleCreateIssue = (newIssue: Omit<Issue, 'id'>) => {
    setIssues([...issues, { ...newIssue, id: issues.length + 1 }])
    setShowCreateForm(false)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Issue Tracker Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <Button onClick={() => setShowCreateForm(true)} className="mb-4">Create New Issue</Button>
      {showCreateForm && <CreateIssueForm onSubmit={handleCreateIssue} onCancel={() => setShowCreateForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {issues.map((issue) => (
          <Card key={issue.id}>
            <CardHeader>
              <CardTitle>{issue.title}</CardTitle>
              <CardDescription>Status: {issue.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{issue.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

