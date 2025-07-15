
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Star, CreditCard, Home, Shield, Calculator, TrendingUp, User, Mail, MapPin, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([45000]);
  const [tenure, setTenure] = useState([24]);
  const [interestRate, setInterestRate] = useState([8.5]);

  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 12 / 100;
    const time = tenure[0];
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  const creditCards = [
    {
      name: "IndusInd Legend Credit Card",
      bank: "IndusInd Bank",
      joiningFee: "Nil",
      rewardsRate: "Reward Points",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop"
    },
    {
      name: "Amazon Pay ICICI Bank Credit Card",
      bank: "ICICI Bank",
      joiningFee: "Nil",
      rewardsRate: "Cashback",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop"
    },
    {
      name: "Flipkart Axis Bank Credit Card",
      bank: "Axis Bank",
      joiningFee: "Rs. 500 + GST",
      rewardsRate: "Cashback",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Priya Verma",
      text: "Findcreditloan.com made my loan search so much easier! I was confused by so many personal loan options, but their comparison tool helped me find the best one quickly. Thank you for the guidance!",
      rating: 5
    },
    {
      name: "Sneha Iyer",
      text: "Finding the best credit cards was effortless with Findcreditloan.com! The detailed comparisons helped me choose a card that perfectly fits my lifestyle. I'm thrilled with my choice and overall experience!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      text: "Findcreditloan.com made it easy for me to check my free credit score and compare personal loan options. The insights were invaluable, helping me make an informed decision. I now feel confident about my choice!",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "HDFC Bank Moneyback Plus Credit Card vs HDFC Bank Millennia Credit Card",
      author: "Kirti Gaur",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop"
    },
    {
      title: "Amazon Pay ICICI Credit Card vs Flipkart Axis Card - New 2025",
      author: "Kirti Gaur",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop"
    },
    {
      title: "Best Credit Cards for Students Studying Abroad - Latest update",
      author: "Kirti Gaur",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">
                <span className="text-blue-600">Find</span>
                <span className="text-cyan-500">Credit</span>
                <span className="text-blue-600">Loan</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Card Category</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Credit Card</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Personal Loan</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Credit Score</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Blogs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">EMI Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Enable <br />
              <span className="text-blue-600">Credit Score</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Check and Monitor your <strong>Credit Score</strong> at Findcreditloan
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Check Now
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-8 transform rotate-3">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">750</div>
                  <div className="text-sm">Good</div>
                </div>
              </div>
              <div className="text-center text-gray-600">Credit Score Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Bringing you the Best Products from Top Banks & Financial Institutions
          </h2>
          <div className="grid md:grid-cols-5 gap-8 mt-12">
            {[
              { icon: TrendingUp, title: "PERSONAL LOAN", color: "bg-teal-100 text-teal-600" },
              { icon: CreditCard, title: "CREDIT CARD", color: "bg-red-100 text-red-600" },
              { icon: Calculator, title: "CREDIT SCORE", color: "bg-green-100 text-green-600" },
              { icon: Home, title: "HOME LOAN", color: "bg-blue-100 text-blue-600" },
              { icon: Shield, title: "INSURANCE", color: "bg-yellow-100 text-yellow-600" }
            ].map((product, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{product.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Most Popular Credit Cards in India</h2>
          <p className="text-center text-gray-600 mb-12">
            Curious about the most popular credit cards? Explore and compare them to see how they measure up!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {creditCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xl font-bold">{card.bank}</div>
                    <div className="text-sm mt-2">Credit Card</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blue-600 font-medium">Joining Fee :</span>
                      <span>{card.joiningFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600 font-medium">Rewards Rate :</span>
                      <span>{card.rewardsRate}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-sm text-gray-600 mb-2">EMI Calculator for</div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">Personal Loan</h2>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium mb-4">Loan Amount (₹)</label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={1000000}
                    min={10000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="text-center font-semibold">₹ {loanAmount[0].toLocaleString()}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-4">Tenure (Months)</label>
                  <Slider
                    value={tenure}
                    onValueChange={setTenure}
                    max={84}
                    min={6}
                    step={1}
                    className="mb-2"
                  />
                  <div className="text-center font-semibold">{tenure[0]} Months</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-4">Interest Rate %</label>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={25}
                    min={5}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="text-center font-semibold">{interestRate[0]} %</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <div className="text-center">
                <div className="text-sm opacity-90 mb-2">Monthly EMI</div>
                <div className="text-4xl font-bold mb-8">₹ {calculateEMI().toLocaleString()}</div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  Apply For Loan
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-600">Company Introductions</div>
              <h3 className="text-2xl font-bold">EMI Calculator</h3>
            </div>
            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Think before you borrow. Whether it's the loan amount, repayment period, or monthly EMI, 
              always calculate the impact on your budget first. Smart decisions start with understanding 
              how each loan affects your financial flow.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calculator className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Loan EMI Calculator</h4>
                    <p className="text-gray-600 text-sm">
                      Determine how much cash you need for short-term expenses. This helps ensure 
                      you have enough liquidity to cover immediate bills.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Home Loan EMI Calculator</h4>
                    <p className="text-gray-600 text-sm">
                      Calculate how much you need for a home loan to ensure you can cover your 
                      monthly payments. This helps you stay within your budget.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customers Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-blue-600 bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="font-semibold text-blue-600">{testimonial.name}</div>
                    </div>
                    <div className="text-6xl text-gray-200">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-600 mb-2">Directly From the Blog</div>
            <h2 className="text-3xl font-bold">News & Articles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-lg font-bold">VS</div>
                    <div className="text-sm">Credit Card Comparison</div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <h3 className="font-semibold text-gray-800 leading-tight">{post.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Score Banner */}
      <section className="py-8 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">720</span>
                </div>
              </div>
              <div className="text-white">
                <span>Know Your </span>
                <span className="font-bold">Credit</span>
                <span> Score, Enjoy Better Loan Approvals!</span>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
              Check Your Free Credit Score Now!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">
                  <span className="text-blue-400">Find</span>
                  <span className="text-cyan-400">Credit</span>
                  <span className="text-blue-400">Loan</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                FindCreditLoan lets you choose and compare multiple credit cards based on rewards, fees, and more. 
                Compare loan interest rates, processing fees, and select the best option for your needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Explore</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Home Loan</a></li>
                <li><a href="#" className="hover:text-white">Personal Loan</a></li>
                <li><a href="#" className="hover:text-white">Credit Card</a></li>
                <li><a href="#" className="hover:text-white">Insurance</a></li>
                <li><a href="#" className="hover:text-white">Saving Account</a></li>
                <li><a href="#" className="hover:text-white">Cibil Score</a></li>
                <li><a href="#" className="hover:text-white">EMI Calculator</a></li>
                <li><a href="#" className="hover:text-white">Blogs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Why Choose Us</a></li>
                <li><a href="#" className="hover:text-white">Refund & Cancellation</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@findcreditloan.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <div>India : 4th floor, A-24, Sec-16,</div>
                    <div>Noida Uttar Pradesh - 201301</div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
