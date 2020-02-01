export const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4sAsHSJRJSjKOkP18bE764LH0xDraYt5yzbL5HlOCXgYCIeMh",
      shorttext:"Sen de bu blog'un bir kopyasını oluşturabilir ve yeni özellikler ekleyerek 1500TL ödüllü bu yarışmaya katılabilirsin!"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQO8q-ZIIGQAcDMH9AhI-AYWi6G7sPopn6mdIyM6UNBQONYhNKQ",
      shorttext:"Bu yazıda markdown'un farklı özellikleri kullandıldı. #### Örnek başlık **Bu kalın bir yazı**"
    },
    {
      title: "Merhaba dünya!",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJQtywPOkatBL72-G_o9ZpOI8poBAe9jG3QBaIkjy7d2jvKIJ_",
      shorttext:"Bu benim ilk blog yazım."
    }
  ];
};
