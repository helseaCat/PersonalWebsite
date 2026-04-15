import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <div className="flex items-center justify-center py-24 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome!</h1>
          <p className="text-lg text-gray-600 max-w-md">
            My name is Chelsea Scott and I do a lot of programming projects and I
            am very happy that you are here! Explore around but notice that this
            page is still very much a work in progress!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App
