'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, ArrowLeft, Lock, Eye, Database, Users } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MOCH RIFKY NURIL FIRMANSYAH
              </span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Pendahuluan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Selamat datang di <span className="font-semibold text-purple-600">MOCH RIFKY NURIL FIRMANSYAH</span>. 
                    Kami sangat peduli terhadap privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi 
                    pribadi Anda ketika menggunakan layanan kami dalam bidang Perdagangan Eceran Kosmetik.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Pengumpulan Data</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kami mengumpulkan berbagai jenis informasi untuk menyediakan layanan terbaik bagi Anda:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Informasi Pribadi:</strong> Nama, email, nomor telepon, alamat</li>
                      <li><strong>Informasi Bisnis:</strong> Data perusahaan, jenis produk kosmetik, target pasar</li>
                      <li><strong>Informasi Penggunaan:</strong> Data penggunaan website, interaksi dengan iklan Meta Ads</li>
                      <li><strong>Informasi Teknis:</strong> IP address, browser, device information</li>
                      <li><strong>Informasi Pembayaran:</strong> Data transaksi yang dienkripsi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Penggunaan Data</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kami menggunakan data Anda untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Menyediakan layanan Perdagangan Eceran Kosmetik</li>
                      <li>Mengelola campaign Meta Ads yang efektif</li>
                      <li>Meningkatkan pengalaman pengguna</li>
                      <li>Mengirimkan informasi produk dan promosi</li>
                      <li>Menganalisis tren dan preferensi pasar</li>
                      <li>Memastikan keamanan transaksi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Perlindungan Data</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Kami melindungi data Anda dengan:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Enkripsi data end-to-end</li>
                      <li>Server yang aman dan terpercaya</li>
                      <li>Akses terbatas untuk data sensitif</li>
                      <li>Backup data secara berkala</li>
                      <li>Monitoring keamanan 24/7</li>
                      <li>Kepatuhan terhadap regulasi privasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Hak Anda Sebagai Pengguna</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Sebagai pengguna, Anda memiliki hak untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Mengakses data pribadi Anda</li>
                      <li>Memperbarui informasi yang tidak akurat</li>
                      <li>Menghapus data pribadi Anda</li>
                      <li>Menolak pemasaran langsung</li>
                      <li>Meminta salinan data Anda</li>
                      <li>Mengajukan keluhan privasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Hubungi Kami</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2">Informasi Kontak</h3>
                  <p className="text-gray-600 mb-1"><strong>Nama:</strong> MOCH RIFKY NURIL FIRMANSYAH</p>
                  <p className="text-gray-600 mb-1"><strong>Telepon:</strong> 085285703497</p>
                  <p className="text-gray-600 mb-1"><strong>Email:</strong> privacy@mochrifky.com</p>
                  <p className="text-gray-600"><strong>Alamat:</strong> KP. CIJAGRA, Desa Cijagra, Kec. Paseh, Kab. Bandung, Jawa Barat</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2">Layanan</h3>
                  <p className="text-gray-600 mb-2">Perdagangan Eceran Kosmetik</p>
                  <p className="text-gray-600">Kami siap membantu Anda dengan pertanyaan seputar privasi data dan perlindungan informasi pribadi Anda.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">&copy; 2024 MOCH RIFKY NURIL FIRMANSYAH. All rights reserved.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}