'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft, Shield, Users, ShoppingBag, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Terms and Conditions
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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Pendahuluan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Selamat datang di <span className="font-semibold text-purple-600">MOCH RIFKY NURIL FIRMANSYAH</span>. 
                    Syarat dan Ketentuan ini mengatur penggunaan layanan kami dalam bidang Perdagangan Eceran Kosmetik. 
                    Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Layanan Kami</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <span className="font-semibold">MOCH RIFKY NURIL FIRMANSYAH</span> menyediakan layanan:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Perdagangan eceran kosmetik untuk manusia</li>
                      <li>Konsultasi strategi Meta Ads untuk produk kosmetik</li>
                      <li>Manajemen campaign iklan Facebook dan Instagram</li>
                      <li>Analisis pasar dan preferensi konsumen</li>
                      <li>Optimasi penjualan produk kosmetik</li>
                      <li>Layanan pelanggan dan dukungan teknis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Kewajiban Pengguna</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Sebagai pengguna layanan kami, Anda setuju untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Memberikan informasi yang akurat dan lengkap</li>
                      <li>Mematuhi semua peraturan yang berlaku</li>
                      <li>Tidak menggunakan layanan untuk aktivitas ilegal</li>
                      <li>Menjaga kerahasiaan informasi akun</li>
                      <li>Melaporkan masalah atau pelanggaran dengan segera</li>
                      <li>Mematuhi kebijakan penggunaan Meta Ads</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Syarat Pembayaran</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Ketentuan pembayaran untuk layanan kami:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pembayaran harus dilakukan sesuai dengan invoice yang diterbitkan</li>
                      <li>Metode pembayaran yang tersedia: Transfer Bank, E-Wallet</li>
                      <li>Pembayaran dianggap sah setelah konfirmasi dari sistem kami</li>
                      <li>Biaya tambahan mungkin berlaku untuk layanan ekstra</li>
                      <li>Pengembalian dana sesuai dengan kebijakan refund</li>
                      <li>Harga dapat berubah sewaktu-waktu dengan pemberitahuan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Hak Kekayaan Intelektual</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Ketentuan mengenai hak kekayaan intelektual:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Semua konten di website ini adalah milik <span className="font-semibold">MOCH RIFKY NURIL FIRMANSYAH</span></li>
                      <li>Logo, merek, dan desain dilindungi oleh hak cipta</li>
                      <li>Penggunaan konten untuk tujuan komersial memerlukan izin tertulis</li>
                      <li>Strategi Meta Ads yang dikembangkan adalah hak milik klien setelah pembayaran</li>
                      <li>Pelanggaran hak kekayaan intelektual akan ditindak tegas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Batasan Tanggung Jawab</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <span className="font-semibold">MOCH RIFKY NURIL FIRMANSYAH</span> tidak bertanggung jawab atas:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Kerugian tidak langsung atau konsekuensial</li>
                      <li>Hasil campaign Meta Ads yang dipengaruhi faktor eksternal</li>
                      <li>Keterlambatan karena force majeure</li>
                      <li>Kehilangan data karena kesalahan pengguna</li>
                      <li>Perubahan kebijakan platform Meta (Facebook/Instagram)</li>
                      <li>Kerusakan sistem yang disebabkan oleh pihak ketiga</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Pengakhiran Layanan</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Layanan dapat dihentikan dalam kondisi:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pengguna melanggar syarat dan ketentuan</li>
                      <li>Pengguna terlibat dalam aktivitas ilegal</li>
                      <li>Pembayaran tidak dilakukan sesuai kesepakatan</li>
                      <li>Adanya permintaan penghentian dari pengguna</li>
                      <li>Kondisi force majeure yang tidak dapat dihindari</li>
                      <li>Perubahan regulasi yang memengaruhi layanan</li>
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
                  <p className="text-gray-600 mb-1"><strong>Email:</strong> legal@mochrifky.com</p>
                  <p className="text-gray-600"><strong>Alamat:</strong> KP. CIJAGRA, Desa Cijagra, Kec. Paseh, Kab. Bandung, Jawa Barat</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2">Layanan</h3>
                  <p className="text-gray-600 mb-2">Perdagangan Eceran Kosmetik</p>
                  <p className="text-gray-600">Untuk pertanyaan seputar syarat dan ketentuan, silakan hubungi kami. Kami siap membantu Anda.</p>
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