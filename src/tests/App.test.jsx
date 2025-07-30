import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import * as api from '../api/fakeStore'

import Home from '../pages/home.jsx'
import Shop from '../pages/shop.jsx'

vi.mock('../api/fakeStore')

describe('Routing', () => {
  it('Home page', () => {
    render(
        <MemoryRouter>
          <Home/>
        </MemoryRouter>
    )

    expect(screen.getByText(/Your one-stop shop for amazing products./i)).toBeInTheDocument()
  })
  it('shows loading state then products after navigation', async () => {
    const user = userEvent.setup()

    const mockProducts = [
      {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        image: 'https://example.com/image.jpg',
        description: 'A nice jacket'
      },
    ]

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockProducts),
    })

    render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </MemoryRouter>
    )

    await user.click(screen.getByText(/start shopping/i))


    await waitFor(() => {
      expect(screen.queryByLabelText(/loading products/i)).not.toBeInTheDocument()
    })

    expect(screen.getByText(/Mens Cotton Jacket/i)).toBeInTheDocument()
  })
})

describe('Shopping page', () => {
  it('Buy now button changes text to Remove', async () => {
    api.getProductsFromApi.mockResolvedValue({
      results: [{
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
      }]
    })
    const user = userEvent.setup()
    render (
        <MemoryRouter>
          <Shop/>
        </MemoryRouter>
    )
  })
})
