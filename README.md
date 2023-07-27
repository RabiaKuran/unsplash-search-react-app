# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Bu proje, Unsplash API'sini kullanarak kullanıcının fotoğraf aramasına göre fotoğrafları listeleyen bir React uygulamasıdır. Proje, Unsplash API'sinin "search photos" özelliğini kullanarak, kullanıcının arama kelimesine göre fotoğraf sonuçlarını getirir ve kullanıcıya sunar.

### Unsplash API'sine istek atabilmek için aşağıdaki adımları takip etmeniz gerekmektedir:

#### Unsplash'a Kaydolma ve API Anahtarı Alma: Unsplash API'sini kullanmak için öncelikle Unsplash'a kaydolmanız gerekmektedir. Kaydolduktan sonra, Unsplash Developer bölümünden bir API anahtarı oluşturabilirsiniz. API anahtarı, API isteklerini yaparken kimliğinizin doğrulanmasını sağlar.

#### Projenize Axios veya Fetch Entegrasyonu: API isteklerini yapmak için JavaScript tarafında bir HTTP kütüphanesi kullanmanız gerekecektir. Axios veya Fetch gibi kütüphaneleri projenize ekleyerek bu işlemi gerçekleştirebilirsiniz.

#### API URL ve Endpointleri: Unsplash API, belirli endpointlere sahiptir. Arama yapmak, rastgele fotoğraflar almak, fotoğraf detaylarına ulaşmak gibi farklı işlemler için farklı endpointleri kullanmanız gerekecektir. Unsplash API belgelerinde bu endpointler ve nasıl kullanılacakları açıklanır.

#### API Anahtarını İsteklere Eklemek: Unsplash API anahtarınızı, her API isteği gönderirken isteğe eklemeniz gerekmektedir. API anahtarını genellikle Authorization başlığı altında "Client-ID" ile birlikte göndermeniz beklenir.

#### İstekleri Oluşturma ve Cevapları İşleme: Axios veya Fetch kütüphaneleri aracılığıyla Unsplash API'sine istekleri oluşturmalısınız. API'den gelen cevapları almalı ve projenizde işlemelisiniz.

#### Hata Kontrolü: API isteklerinde hata durumlarına karşı kontroller yapmalısınız. Başarılı veya başarısız durumlarında uygun işlemleri gerçekleştirmelisiniz.

Yukarıdaki adımları takip ederek, Unsplash API'sine başarıyla istek atabilir ve proje içinde kullanabilirsiniz. Unsplash API'nin belgelerine başvurarak daha ayrıntılı bilgilere ulaşabilir ve örnek kullanımları inceleyebilirsiniz. Unsplash belgelerine şu linkten ulaşabilirsiniz: https://unsplash.com/documentation


#### Nasıl Kullanılır
Uygulama, arama çubuğuna herhangi bir kelime yazarak fotoğraf aramanıza olanak tanır. Arama sonuçları hemen aşağıda liste şeklinde gösterilir. Kullanıcılar aradıkları fotoğrafları bu sonuçlar arasından seçebilir ve görüntüleyebilirler.
