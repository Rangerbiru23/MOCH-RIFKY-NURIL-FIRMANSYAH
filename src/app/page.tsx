'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Instagram, 
  Facebook, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp,
  Users,
  Target,
  Eye,
  Heart,
  Star,
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: "Meta Ads Campaign",
      description: "Strategi iklan Facebook & Instagram yang terukur untuk meningkatkan penjualan kosmetik",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Product Showcase",
      description: "Tampilkan produk kosmetik Anda dengan visual yang menarik dan profesional",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      title: "Customer Engagement",
      description: "Bangun komunitas loyal dan tingkatkan interaksi dengan pelanggan",
      icon: <Users className="w-8 h-8" />,
      color: "from-rose-500 to-orange-500"
    }
  ]

  const stats = [
    { label: "Klien Puas", value: "500+", icon: <Heart className="w-5 h-5" /> },
    { label: "Campaign Sukses", value: "1,200+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Product Sold", value: "50K+", icon: <ShoppingBag className="w-5 h-5" /> },
    { label: "Years Experience", value: "5+", icon: <Star className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MOCH RIFKY NURIL FIRMANSYAH
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <TrendingUp className="w-4 h-4 mr-2" />
              Meta Ads Specialist for Cosmetics
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                MOCH RIFKY NURIL FIRMANSYAH
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert dalam <span className="font-semibold text-purple-600">Perdagangan Eceran Kosmetik</span> dengan strategi Meta Ads yang terbukti meningkatkan penjualan hingga 300%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                <Instagram className="w-5 h-5 mr-2" />
                Mulai Campaign
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 text-lg px-8">
                <Eye className="w-5 h-5 mr-2" />
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Layanan Premium
              </span>
            </h2>
            <p className="text-xl text-gray-600">Solusi lengkap untuk bisnis kosmetik Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  activeService === service.id ? 'ring-4 ring-purple-200' : ''
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`}></div>
                <CardContent className="relative p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white border-0`}>
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mengapa Memilih Kami?
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Targeted Marketing</h3>
                    <p className="text-gray-600">Fokus pada audiens yang tepat untuk produk kosmetik Anda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record terbukti dalam meningkatkan penjualan kosmetik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Tim profesional yang berpengalaman di industri kosmetik</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <ShoppingBag className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-purple-800">Perdagangan Eceran Kosmetik</p>
                  <p className="text-purple-600">Specialist Since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600">Siap meningkatkan penjualan kosmetik Anda?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-gray-600">085285703497</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@mochrifky.com</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-gray-600">KP. CIJAGRA, Desa Cijagra, Kec. Paseh, Kab. Bandung, Jawa Barat</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">MOCH RIFKY NURIL FIRMANSYAH</span>
              </div>
              <p className="text-gray-400">Specialist dalam Perdagangan Eceran Kosmetik dengan strategi Meta Ads terbaik.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Meta Ads Campaign</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Showcase</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Engagement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MOCH RIFKY NURIL FIRMANSYAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}