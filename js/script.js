const menuData = [
  {
    title: "Barbecues",
    items: [
      { name: "BBQ CHICKEN SHISH", price: 15.5 },
      { name: "BBQ CHICKEN WINGS", price: 13.0 },
      { name: "BBQ ADANA (KOFTE)", price: 15.0 },
      { name: "BBQ LAMB SHISH", price: 17.5 },
      { name: "BBQ LAMB RIBS", price: 16.0 },
      { name: "BBQ LAMB CHOPS", price: 20.0 },
      { name: "BBQ COMBINATION", price: 15.5 },
      { name: "BBQ MIX SPECIAL", price: 30.0 },
      { name: "SIRLOIN STEAK (12oz)", price: 29.0 },
    ],
  },
  {
    title: "House Specials",
    items: [
      { name: "ADANA ISKENDER", price: 18.0 },
      { name: "SAC TAVA", price: 20.0 },
      { name: "KUZU SIS BEYTI", price: 20.0 },
      { name: "TAVUK SIS BEYTI", price: 18.0 },
      { name: "ADANA BEYTI", price: 18.0 },
      { name: "ALI NAZIK (CHICKEN OR LAMB)", price: 20.0 },
    ],
  },
  {
    title: "Main Dishes",
    items: [{ name: "SPECIAL DISHES OF THE DAY", price: 12.5 }],
  },
  {
    title: "Hot Mezes/Sides",
    items: [
      { name: "SIGARA BOREGI", price: 6.5 },
      { name: "GARLIC BREAD WITH CHEESE", price: 6.5 },
      { name: "GRILLED HALLOUMI ", price: 6.5 },
      { name: "MOZZARELLA STICKS", price: 5.5 },
      { name: "HOT MEZE PLATTER ", price: 22.0 },
    ],
  },
  {
    title: "Cold Mezes/Sides",
    items: [
      { name: "Humus ", price: 5.5 },
      { name: "CACIK", price: 4.95 },
      { name: "ISPANAK TARATOR", price: 4.95 },
      { name: "FETA SALAD", price: 5.5 },
      { name: "FETA CHEESE ", price: 4.45 },
      { name: "SHEPHERDS SALAD ", price: 5.5 },
      { name: "EZME SALAD", price: 4.95 },
      { name: "HUMUS KAVURMA", price: 7.5 },
      { name: "YOGHURT ", price: 3.5 },
      { name: "MARINATED MIXED OLIVES  ", price: 3.95 },
      { name: "MIXED COLD MEZE PLATTER  ", price: 20.0 },
    ],
  },
  {
    title: "Soups",
    items: [
      { name: "LENTIL SOUP ", price: 6.0 },
      { name: "CHICKEN SOUP", price: 6.0 },
    ],
  },
  {
    title: "Special Salads",
    items: [
      { name: "CHICKEN SALAD  ", price: 15.0 },
      { name: "SALMON SALAD", price: 20.0 },
      { name: "FETA CHEESE AND CHICKEN SALAD", price: 19.0 },
      { name: "STEAK SALAD ", price: 20.0 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "RICE PUDDING ", price: 5.0 },
      { name: "CHOCOLATE CAKE ", price: 5.5 },
      { name: "ICE CREAM ", price: 5.0 },
      { name: "CHEESE CAKE ", price: 5.5 },
      { name: "BAKLAVA ", price: 6.5 },
      { name: "KUNEFE  ", price: 7.5 },
    ],
  },
  {
    title: "Kids Menu",
    items: [
      { name: "CHICKEN BURGER WITH CHIPS  ", price: 5.5 },
      { name: "CHICKEN NUGGETS WITH CHIPS ", price: 5.5 },
      { name: "CHICKEN WINGS WITH CHIPS ", price: 5.5 },
      { name: "CHEESE BURGER WITH CHIPS ", price: 5.5 },
      { name: "CHICKEN SHISH WITH CHIPS  ", price: 5.5 },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "CHIPS", price: 3.5 },
      { name: "CHIPS AND CHEESE", price: 5.0 },
      { name: "HALLOUMI", price: 6.0 },
      { name: "RICE", price: 3.5 },
      { name: "CALAMAR", price: 7.0 },
      { name: "CHICKEN STRIPS", price: 5.5 },
      { name: "ONION RINGS", price: 3.5 },
      { name: "POTATO WEDGES", price: 4.5 },
      { name: "EXTRA DIPS", price: 1.0 },
    ],
  },
];

const container = document.querySelector("#menu-container");

menuData.forEach((category) => {
  const card = document.createElement("div");

  card.className =
    "bg-white p-6 rounded-lg shadow cursor-pointer hover:shadow-xl transition";

    card.innerHTML = `
    <div class="border-b border-gray-200 pb-4">
  
      <!-- CATEGORY HEADER -->
      <h3 class="text-2xl font-light tracking-wide cursor-pointer toggle hover:text-amber-600 transition">
        ${category.title}
      </h3>
  
      <!-- ITEMS -->
      <div class="content hidden mt-6 space-y-4">
  
        ${category.items
          .map(
            (item) => `
            <div class="flex justify-between items-center group">
  
              <span class="text-gray-700 group-hover:text-black transition">
                ${item.name}
              </span>
  
              <span class="text-amber-600 font-medium">
                £${item.price}
              </span>
  
            </div>
          `
          )
          .join("")}
  
      </div>
  
    </div>
  `;

  container.appendChild(card);
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle")) {
    const content = e.target.nextElementSibling;
    content.classList.toggle("hidden");
  }
});


