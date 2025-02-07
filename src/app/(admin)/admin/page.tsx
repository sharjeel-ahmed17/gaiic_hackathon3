'use client'
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Home,
    Users,
    BarChart2,
    User
} from 'lucide-react';

const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' }
];

const mockAnalytics = {
    totalUsers: 250,
    activeUsers: 180,
    newUsersThisMonth: 45
};

const AdminPanel = () => {
    const [selectedTab, setSelectedTab] = useState('dashboard');
    const [users, setUsers] = useState(mockUsers);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

    const handleAddUser = () => {
        if (newUser.name && newUser.email && newUser.role) {
            setUsers([
                ...users,
                {
                    id: users.length + 1,
                    ...newUser
                }
            ]);
            setNewUser({ name: '', email: '', role: '' });
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <nav className="flex space-x-4">
                        <button
                            className={`flex items-center space-x-2 ${selectedTab === 'dashboard' ? 'text-blue-600' : ''}`}
                            onClick={() => setSelectedTab('dashboard')}
                        >
                            <Home size={18} />
                            <span>Dashboard</span>
                        </button>
                        <button
                            className={`flex items-center space-x-2 ${selectedTab === 'users' ? 'text-blue-600' : ''}`}
                            onClick={() => setSelectedTab('users')}
                        >
                            <Users size={18} />
                            <span>Users</span>
                        </button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="outline">
                        <User className="mr-2" size={18} /> Profile
                    </Button>
                    <Button variant="destructive">
                        Logout
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-6 bg-gray-50 overflow-y-auto">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="dashboard">
                            <BarChart2 className="mr-2" /> Dashboard
                        </TabsTrigger>
                        <TabsTrigger value="users">
                            <Users className="mr-2" /> User Management
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Total Users</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">{mockAnalytics.totalUsers}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Active Users</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">{mockAnalytics.activeUsers}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>New Users (This Month)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">{mockAnalytics.newUsersThisMonth}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="users">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <CardTitle>User List</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="p-2 text-left">ID</th>
                                                    <th className="p-2 text-left">Name</th>
                                                    <th className="p-2 text-left">Email</th>
                                                    <th className="p-2 text-left">Role</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user) => (
                                                    <tr key={user.id} className="border-b hover:bg-gray-100">
                                                        <td className="p-2">{user.id}</td>
                                                        <td className="p-2">{user.name}</td>
                                                        <td className="p-2">{user.email}</td>
                                                        <td className="p-2">{user.role}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Add New User</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input
                                        placeholder="Name"
                                        value={newUser.name}
                                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Email"
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    />
                                    <Select
                                        value={newUser.role}
                                        onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Admin">Admin</SelectItem>
                                            <SelectItem value="Editor">Editor</SelectItem>
                                            <SelectItem value="Viewer">Viewer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button
                                        onClick={handleAddUser}
                                        className="w-full"
                                    >
                                        Add User
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
};

export default AdminPanel;