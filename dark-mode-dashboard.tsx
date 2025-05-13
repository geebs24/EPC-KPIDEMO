import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  // Dashboard state
  const [timeRange, setTimeRange] = useState('month');
  const [selectedView, setSelectedView] = useState('overview');
  
  // Sample data
  const monthlyRevenue = [
    { month: 'Jan', thca: 105000, tobacco: 78000, total: 183000 },
    { month: 'Feb', thca: 115000, tobacco: 82000, total: 197000 },
    { month: 'Mar', thca: 130000, tobacco: 85000, total: 215000 },
    { month: 'Apr', thca: 142000, tobacco: 87000, total: 229000 },
    { month: 'May', thca: 158000, tobacco: 91000, total: 249000 },
    { month: 'Jun', thca: 175000, tobacco: 95000, total: 270000 }
  ];
  
  const customerTiers = [
    { name: 'Bronze', value: 45 },
    { name: 'Silver', value: 30 },
    { name: 'Gold', value: 15 },
    { name: 'Platinum', value: 10 }
  ];
  
  const tierColors = ['#CD7F32', '#C0C0C0', '#FFD700', '#E5E4E2'];
  
  const conversionRates = [
    { stage: 'Leads', rate: 100 },
    { stage: 'Qualified', rate: 65 },
    { stage: 'Presentation', rate: 45 },
    { stage: 'Negotiation', rate: 30 },
    { stage: 'Contract', rate: 22 },
    { stage: 'Active Client', rate: 18 }
  ];
  
  const productPerformance = [
    { product: 'THCA Flower A', revenue: 58000, growth: 12, margin: 42 },
    { product: 'THCA Flower B', revenue: 45000, growth: 8, margin: 38 },
    { product: 'THCA Extracts', revenue: 62000, growth: 15, margin: 45 },
    { product: 'Premium Tobacco', revenue: 39000, growth: 5, margin: 32 },
    { product: 'Flavored Tobacco', revenue: 35000, growth: 7, margin: 36 },
    { product: 'Accessories', revenue: 31000, growth: 10, margin: 52 }
  ];
  
  const averageOrderValue = [
    { month: 'Jan', bronze: 2800, silver: 5200, gold: 8500, platinum: 12500 },
    { month: 'Feb', bronze: 2900, silver: 5300, gold: 8700, platinum: 13000 },
    { month: 'Mar', bronze: 3000, silver: 5400, gold: 9000, platinum: 13200 },
    { month: 'Apr', bronze: 3100, silver: 5500, gold: 9200, platinum: 13500 },
    { month: 'May', bronze: 3200, silver: 5700, gold: 9500, platinum: 14000 },
    { month: 'Jun', bronze: 3300, silver: 5900, gold: 9800, platinum: 14200 }
  ];
  
  const growthProjections = [
    { month: 'Current', revenue: 270000 },
    { month: '+1 Month', revenue: 297000 },
    { month: '+2 Months', revenue: 326700 },
    { month: '+3 Months', revenue: 359370 },
    { month: '+6 Months', revenue: 486000 },
    { month: '+12 Months', revenue: 810000 }
  ];
  
  // Inventory data
  const inventoryData = [
    { product: 'THCA Flower A', sku: 'TF-A-001', stock: 245, reorderPoint: 100, demand: 'High', status: 'Good' },
    { product: 'THCA Flower B', sku: 'TF-B-002', stock: 68, reorderPoint: 80, demand: 'High', status: 'Low' },
    { product: 'THCA Extracts', sku: 'TE-001', stock: 12, reorderPoint: 40, demand: 'Very High', status: 'Critical' },
    { product: 'Premium Tobacco', sku: 'PT-001', stock: 156, reorderPoint: 120, demand: 'Medium', status: 'Good' },
    { product: 'THCA Vapes', sku: 'TV-001', stock: 8, reorderPoint: 40, demand: 'High', status: 'Critical' }
  ];
  
  // Sales spike data
  const salesSpikeData = [
    { date: '05/01', product: 'THCA Extracts', increase: 142, normal: 42, actual: 102 },
    { date: '05/09', product: 'THCA Vapes', increase: 98, normal: 38, actual: 75 },
    { date: '05/12', product: 'Premium Tobacco', increase: 74, normal: 25, actual: 43 }
  ];
  
  // Top selling products data
  const topProducts = [
    { name: 'THCA Extracts', category: 'Concentrates', sales: 381, revenue: 79980, growth: 45, stock: 12 },
    { name: 'THCA Flower A', category: 'Flower', sales: 252, revenue: 42840, growth: 21, stock: 245 },
    { name: 'THCA Vapes', category: 'Vapes', sales: 265, revenue: 39750, growth: 31, stock: 8 }
  ];

  // Icon components using SVG
  const AlertTriangle = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
  
  const TrendingUp = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
  
  const ChevronRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  // Render the overview section
  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">East Port City Distribution - Monthly Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis tickFormatter={(value) => `${value / 1000}k`} stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }}
              formatter={(value) => [`${value.toLocaleString()}`, 'Revenue']} 
            />
            <Legend />
            <Area type="monotone" dataKey="thca" stackId="1" stroke="#8884d8" fill="#8884d8" name="THCA Products" />
            <Area type="monotone" dataKey="tobacco" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Tobacco Products" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Projected Growth with Premium Partnership</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={growthProjections}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Projected Revenue']} 
            />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" activeDot={{ r: 8 }} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Customer Tier Distribution</h3>
        <div className="flex">
          <ResponsiveContainer width="60%" height={250}>
            <PieChart>
              <Pie
                data={customerTiers}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {customerTiers.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={tierColors[index % tierColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }} formatter={(value) => [`${value}%`, 'Distribution']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="w-40 flex flex-col justify-center">
            <div className="mb-2 font-semibold text-white">Key Insights:</div>
            <div className="text-sm mb-1 text-gray-300">• 55% in higher tiers</div>
            <div className="text-sm mb-1 text-gray-300">• 25% tier upgrade potential</div>
            <div className="text-sm text-gray-300">• Premium partnership opportunity</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Sales Funnel Conversion</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={conversionRates} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} stroke="#9CA3AF" />
            <YAxis dataKey="stage" type="category" width={100} stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }} formatter={(value) => [`${value}%`, 'Conversion Rate']} />
            <Bar dataKey="rate" fill="#8884d8">
              {conversionRates.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#8884d8' : `rgba(136, 132, 216, ${1 - index * 0.15})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Top Selling Products Overview */}
      <div className="md:col-span-2 bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Top Selling Products - Last 7 Days</h3>
          <button className="text-blue-400 text-sm font-medium flex items-center" onClick={() => setSelectedView('inventory')}>
            View Detailed Inventory <ChevronRight className="ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Weekly Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Growth</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stock Status</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {topProducts.map((product, index) => {
                const stockStatus = product.stock < 20 ? 'critical' : product.stock < 70 ? 'low' : 'good';
                
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{product.name}</div>
                      <div className="text-xs text-gray-400">{product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{product.sales} units</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">${product.revenue.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <TrendingUp className="text-green-500 mr-1" />
                        <span className="text-sm text-green-400">{product.growth}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${stockStatus === 'critical' ? 'bg-red-900 text-red-300' : 
                          stockStatus === 'low' ? 'bg-yellow-900 text-yellow-300' : 
                          'bg-green-900 text-green-300'}`}>
                        {product.stock} units {stockStatus === 'critical' ? '(Critical)' : stockStatus === 'low' ? '(Low)' : ''}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  // Inventory Tab
  const renderInventory = () => (
    <div className="grid grid-cols-1 gap-6">
      {/* Low Stock Alert Section */}
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-red-500 mr-2" />
          <h3 className="text-lg font-semibold text-white">Low Stock Alerts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Current Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Reorder Point</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Demand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {inventoryData
                .filter(item => item.status === 'Critical' || item.status === 'Low')
                .map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.sku}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'Critical' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>
                      {item.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.reorderPoint}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.demand}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs font-medium">
                      Order Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Sales Spike Tracking */}
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <div className="flex items-center mb-4">
          <TrendingUp className="text-green-500 mr-2" />
          <h3 className="text-lg font-semibold text-white">Recent Sales Spikes</h3>
          <span className="ml-auto text-sm text-gray-400">Last 14 days</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {salesSpikeData.map((spike, index) => (
            <div key={index} className="border border-green-700 bg-green-900/30 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-white">{spike.product}</div>
                  <div className="text-green-400 text-xl font-bold mt-1">+{spike.increase}%</div>
                </div>
                <span className="text-xs text-gray-400">{spike.date}</span>
              </div>
              <div className="mt-3 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Normal Sales:</span>
                  <span>{spike.normal} units</span>
                </div>
                <div className="flex justify-between font-medium text-white">
                  <span>Actual Sales:</span>
                  <span>{spike.actual} units</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inventory Management Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
          <h3 className="text-lg font-semibold mb-4 text-white">Inventory Status Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Critical (< 20 units)', value: inventoryData.filter(item => item.stock < 20).length },
                  { name: 'Low (20-70 units)', value: inventoryData.filter(item => item.stock >= 20 && item.stock < 70).length },
                  { name: 'Good (70+ units)', value: inventoryData.filter(item => item.stock >= 70).length }
                ]}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                <Cell fill="#ef4444" />
                <Cell fill="#f59e0b" />
                <Cell fill="#10b981" />
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
          <h3 className="text-lg font-semibold mb-4 text-white">Recommended Actions</h3>
          <div className="space-y-4">
            <div className="bg-red-900/30 border-l-4 border-red-700 p-4">
              <div className="flex">
                <AlertTriangle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-red-400">Critical Inventory Alert</p>
                  <p className="text-sm text-red-300 mt-1">THCA Extracts and THCA Vapes are critically low and need immediate reordering.</p>
                  <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">Place Emergency Order</button>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-900/30 border-l-4 border-yellow-700 p-4">
              <div className="flex">
                <AlertTriangle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-yellow-400">Supply Chain Opportunity</p>
                  <p className="text-sm text-yellow-300 mt-1">THCA Flower B is approaching low stock levels while sales remain strong.</p>
                  <button className="mt-2 bg-yellow-600 text-white px-3 py-1 rounded text-sm font-medium">Review Order Quantity</button>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/30 border-l-4 border-green-700 p-4">
              <div className="flex">
                <TrendingUp className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-green-400">Growth Opportunity</p>
                  <p className="text-sm text-green-300 mt-1">The recent sales spike in THCA Extracts suggests increasing demand.</p>
                  <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">Explore New Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Sales Tab
  const renderSales = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Top Performing Products</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="product" stroke="#9CA3AF" />
            <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `$${value / 1000}k`} stroke="#9CA3AF" />
            <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }} />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
            <Bar yAxisId="right" dataKey="margin" fill="#82ca9d" name="Profit Margin %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Average Order Value by Tier</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={averageOrderValue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: 'white' }} formatter={(value) => [`$${value.toLocaleString()}`, 'AOV']} />
            <Legend />
            <Line type="monotone" dataKey="bronze" stroke="#CD7F32" name="Bronze Tier" />
            <Line type="monotone" dataKey="silver" stroke="#C0C0C0" name="Silver Tier" />
            <Line type="monotone" dataKey="gold" stroke="#FFD700" name="Gold Tier" />
            <Line type="monotone" dataKey="platinum" stroke="#E5E4E2" name="Platinum Tier" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="md:col-span-2 bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Tiered Wholesale Program Performance</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="text-center font-medium text-gray-300">Bronze Tier</div>
            <div className="text-center text-2xl font-bold my-2 text-white">$198,000</div>
            <div className="text-center text-sm text-gray-400">45% of Members</div>
            <div className="text-center text-sm font-medium mt-2 text-green-400">+8% MoM</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="text-center font-medium text-gray-300">Silver Tier</div>
            <div className="text-center text-2xl font-bold my-2 text-white">$177,000</div>
            <div className="text-center text-sm text-gray-400">30% of Members</div>
            <div className="text-center text-sm font-medium mt-2 text-green-400">+12% MoM</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="text-center font-medium text-gray-300">Gold Tier</div>
            <div className="text-center text-2xl font-bold my-2 text-white">$147,000</div>
            <div className="text-center text-sm text-gray-400">15% of Members</div>
            <div className="text-center text-sm font-medium mt-2 text-green-400">+15% MoM</div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <div className="text-center font-medium text-gray-300">Platinum Tier</div>
            <div className="text-center text-2xl font-bold my-2 text-white">$142,000</div>
            <div className="text-center text-sm text-gray-400">10% of Members</div>
            <div className="text-center text-sm font-medium mt-2 text-green-400">+18% MoM</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Marketing Tab
  const renderMarketing = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Marketing Optimization Opportunities</h3>
        <div className="space-y-4">
          <div className="bg-green-900/30 p-3 rounded-lg border border-green-700">
            <h4 className="font-medium text-green-400">Referral Program Expansion</h4>
            <p className="text-sm text-gray-300 mt-1">29.5x ROI - Highest performing channel</p>
            <div className="flex items-center mt-2">
              <div className="h-2 flex-grow rounded-full bg-gray-600">
                <div className="h-2 rounded-full bg-green-500" style={{width: '25%'}}></div>
              </div>
              <span className="text-xs ml-2 text-gray-400">25% Implemented</span>
            </div>
            <p className="text-xs text-green-400 mt-2">Potential 40% revenue increase</p>
          </div>
          <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-700">
            <h4 className="font-medium text-blue-400">Tier Upgrade Campaign</h4>
            <p className="text-sm text-gray-300 mt-1">Target Bronze members for Silver upgrade</p>
            <div className="flex items-center mt-2">
              <div className="h-2 flex-grow rounded-full bg-gray-600">
                <div className="h-2 rounded-full bg-blue-500" style={{width: '10%'}}></div>
              </div>
              <span className="text-xs ml-2 text-gray-400">10% Implemented</span>
            </div>
            <p className="text-xs text-blue-400 mt-2">Potential 22% AOV increase</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">Sales Anomaly Detection</h3>
        <div className="space-y-4">
          <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-700">
            <h4 className="font-medium text-yellow-400 flex items-center">
              <TrendingUp className="text-yellow-500 mr-1" />
              THCA Extracts Sales Spike
            </h4>
            <p className="text-sm text-gray-300 mt-1">142% increase on May 12th</p>
            <div className="mt-2 text-xs text-gray-400">Likely cause: <span className="font-medium text-gray-300">Social media influencer promotion</span></div>
            <div className="mt-2 flex justify-between">
              <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Investigate</button>
              <button className="text-xs bg-green-600 text-white px-2 py-1 rounded">Capitalize</button>
            </div>
          </div>
          
          <div className="bg-red-900/30 p-3 rounded-lg border border-red-700">
            <h4 className="font-medium text-red-400 flex items-center">
              <AlertTriangle className="text-red-500 mr-1" />
              Critical Inventory Alert
            </h4>
            <p className="text-sm text-gray-300 mt-1">THCA Extracts (12 units), THCA Vapes (8 units)</p>
            <div className="mt-2 text-xs text-gray-400">Risk: <span className="font-medium text-gray-300">Loss of $38,000+ in potential sales</span></div>
            <div className="mt-2 flex justify-end">
              <button className="text-xs bg-red-600 text-white px-2 py-1 rounded">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 px-6 py-4 mb-6 flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">East Port City Distribution</h1>
              <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded ml-3">PREMIUM</span>
            </div>
            <p className="text-gray-400">THCA & Tobacco Wholesale KPI Dashboard</p>
          </div>
          <div className="flex items-center">
            <select 
              className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm text-gray-200"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
            <div className="bg-gray-700 px-3 py-1 rounded-full flex items-center ml-3">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-green-400 text-sm font-medium">Live Data</span>
            </div>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
            <div className="text-gray-400 text-sm">Monthly Revenue</div>
            <div className="text-2xl font-bold mt-1 text-white">$270,000</div>
            <div className="flex items-center mt-1">
              <span className="text-green-400 text-sm font-medium">+8.4% </span>
              <span className="text-gray-400 text-sm ml-1">vs prev. month</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
            <div className="text-gray-400 text-sm">Profit Margin</div>
            <div className="text-2xl font-bold mt-1 text-white">41.2%</div>
            <div className="flex items-center mt-1">
              <span className="text-green-400 text-sm font-medium">+2.1% </span>
              <span className="text-gray-400 text-sm ml-1">vs prev. month</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
            <div className="text-gray-400 text-sm">Active Wholesale Partners</div>
            <div className="text-2xl font-bold mt-1 text-white">247</div>
            <div className="flex items-center mt-1">
              <span className="text-green-400 text-sm font-medium">+12 </span>
              <span className="text-gray-400 text-sm ml-1">new this month</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4">
            <div className="text-gray-400 text-sm">Avg. Order Value</div>
            <div className="text-2xl font-bold mt-1 text-white">$6,420</div>
            <div className="flex items-center mt-1">
              <span className="text-green-400 text-sm font-medium">+$320 </span>
              <span className="text-gray-400 text-sm ml-1">vs prev. month</span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 p-4 mb-6">
          <div className="flex space-x-4">
            <button 
              className={`px-4 py-2 rounded-md font-medium ${selectedView === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setSelectedView('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium ${selectedView === 'inventory' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setSelectedView('inventory')}
            >
              Inventory Tracking
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium ${selectedView === 'sales' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setSelectedView('sales')}
            >
              Sales Performance
            </button>
            <button 
              className={`px-4 py-2 rounded-md font-medium ${selectedView === 'marketing' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setSelectedView('marketing')}
            >
              Marketing Analytics
            </button>
          </div>
        </div>
        
        {/* Content based on selected view */}
        {selectedView === 'overview' && renderOverview()}
        {selectedView === 'inventory' && renderInventory()}
        {selectedView === 'sales' && renderSales()}
        {selectedView === 'marketing' && renderMarketing()}
        
        {/* Alert Bar for Critical Stock */}
        {inventoryData.some(item => item.status === 'Critical') && (
          <div className="mt-6 bg-red-900/30 border border-red-700 rounded-lg shadow-md p-4 flex items-start">
            <AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-medium text-red-400">Critical Inventory Alert</h2>
              <p className="mt-1 text-red-300">
                {inventoryData.filter(item => item.status === 'Critical').length} products are at critically low stock levels. 
                These products represent approximately $119,730 in weekly revenue.
              </p>
              <button className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium">
                View Emergency Reorder Plan
              </button>
            </div>
          </div>
        )}
        
        {/* Premium Service Callout */}
        <div className="mt-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg shadow-md border border-blue-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Premium Partnership Advantage for East Port City Distribution</h2>
              <p className="mt-2 text-blue-200">This interactive dashboard is just one of the many tools I'll implement as your dedicated business growth partner. With the Premium Partnership, you'll have 24/7 access to comprehensive analytics and growth strategies.</p>
              <ul className="mt-3 list-disc list-inside text-blue-200 space-y-1">
                <li>Real-time KPI tracking across all business functions</li>
                <li>Inventory alerts and sales spike detection</li>
                <li>Custom growth projections & scenario modeling</li>
                <li>Actionable insights delivered daily</li>
                <li>Continuous optimization of your wholesale program</li>
              </ul>
              <button className="mt-4 bg-white text-indigo-700 hover:bg-blue-100 px-6 py-2 rounded-md font-medium">
                Activate Premium Partnership
              </button>
            </div>
            <div className="hidden md:flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg border border-blue-600">
              <div className="text-xl font-bold">300-1000%</div>
              <div className="text-sm text-blue-300">Business Growth</div>
              <div className="mt-3 text-xl font-bold">30-50%</div>
              <div className="text-sm text-blue-300">Margin Enhancement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;