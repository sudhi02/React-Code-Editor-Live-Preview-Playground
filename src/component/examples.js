export const EXAMPLES = {
    counter: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter Example</h1>
      <p>This is a simple counter component.</p>
      <div>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '8px 16px', backgroundColor: '#ff4757', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Decrement
        </button>
        <span style={{ margin: '0 10px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {count}
        </span>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '8px 16px', backgroundColor: '#2ed573', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Increment
        </button>
      </div>
      <p>Current count is: {count}</p>
    </div>
  );
}`,

    todo: `function TodoApp() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);
  const [inputValue, setInputValue] = React.useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          style={{ flex: 1, padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          style={{ padding: '8px 16px', backgroundColor: '#5352ed', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000',
              padding: '8px',
              margin: '5px 0',
              backgroundColor: '#f1f2f6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return <TodoApp />;
}`,

    api: `function ApiExample() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Function to fetch user details from the API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await GetUserDetails();
      if (data?.status === 200 && data?.data?.length > 0) {
        setUsers(data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      // You could also set an error state here to display to the user
    }
    setLoading(false);
  };
  
  // If you need to call fetchUsers when component mounts, use useEffect
  // React.useEffect(() => {
  //   fetchUsers();
  // }, []);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>User API Example</h1>
      
      {/* Correct ways to call functions in JSX */}
      
      {/* Method 1: Direct function reference (no parentheses) */}
      <button
        onClick={fetchUsers}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#3742fa',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          margin: '5px'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Users (Direct)'}
      </button>
      
      {/* Method 2: Arrow function wrapper (if you need to pass parameters) */}
      <button
        onClick={() => fetchUsers()}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#2ed573',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          margin: '5px'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Users (Arrow)'}
      </button>
      
      {/* Method 3: Using bind (less common) */}
      <button
        onClick={fetchUsers.bind(this)}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#ff4757',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          margin: '5px'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Users (Bind)'}
      </button>
      
      {users.length > 0 ? (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h3>User List:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map(user => (
              <li
                key={user.id}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#f1f2f6',
                  borderRadius: '4px'
                }}
              >
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !loading && <p style={{ marginTop: '20px' }}>No users found. Click a button to fetch users.</p>
      )}
    </div>
  );
}

function App() {
  return <ApiExample />;
}`
};