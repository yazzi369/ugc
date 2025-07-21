// Application data
const applicationData = {
  "samplePosts": [
    {
      "title": "AI-Generated Recipes: The Future of Cooking?",
      "category": "Food Tech",
      "excerpt": "We tested 10 AI-generated recipes to see if machines can really replace human creativity in the kitchen...",
      "author": "You Goddammit Labs",
      "date": "June 15, 2025",
      "readTime": "5 min read",
      "image": "ai-cooking.jpg"
    },
    {
      "title": "Why We Hate Cilantro: The Science Behind Taste Aversion",
      "category": "Food Psychology",
      "excerpt": "Diving deep into the genetic factors that make some people despise this polarizing herb...",
      "author": "Student Contributor",
      "date": "June 12, 2025",
      "readTime": "3 min read",
      "image": "cilantro-hate.jpg"
    },
    {
      "title": "Fermentation Fails: Learning from Kitchen Disasters",
      "category": "Community",
      "excerpt": "Our community shares their most spectacular fermentation failures and what they learned...",
      "author": "Community",
      "date": "June 10, 2025",
      "readTime": "7 min read",
      "image": "fermentation-fails.jpg"
    },
    {
      "title": "CRISPR Tomatoes: A Taste Test Review",
      "category": "Research",
      "excerpt": "We got our hands on gene-edited tomatoes and put them through rigorous taste testing...",
      "author": "You Goddammit Labs",
      "date": "June 8, 2025",
      "readTime": "6 min read",
      "image": "crispr-tomatoes.jpg"
    }
  ],
  "recipes": [
    {
      "name": "Molecular Gastronomy Mac & Cheese",
      "difficulty": "Advanced",
      "time": "2 hours",
      "rating": 4.5,
      "description": "Traditional comfort food meets modern science in this spherification experiment"
    },
    {
      "name": "Fermented Hot Sauce Challenge",
      "difficulty": "Intermediate",
      "time": "3 weeks",
      "rating": 4.8,
      "description": "Student-submitted recipe for creating complex flavors through controlled fermentation"
    },
    {
      "name": "Lab-Grown Meat Alternative Burger",
      "difficulty": "Beginner",
      "time": "30 minutes",
      "rating": 4.2,
      "description": "Exploring plant-based proteins that mimic meat textures using food science principles"
    }
  ],
  "categories": [
    {
      "name": "Food Tech",
      "description": "Latest innovations in food technology and their impact on our daily lives",
      "icon": "🔬"
    },
    {
      "name": "Recipes",
      "description": "Experimental and traditional recipes with scientific explanations",
      "icon": "🧑‍🍳"
    },
    {
      "name": "Research",
      "description": "Breaking down complex food science research into digestible insights",
      "icon": "📊"
    },
    {
      "name": "Community",
      "description": "Student submissions, discussions, and collaborative experiments",
      "icon": "👥"
    },
    {
      "name": "Food Psychology",
      "description": "Why we love what we love and hate what we hate",
      "icon": "🧠"
    },
    {
      "name": "Sustainability",
      "description": "Environmental impact of food choices and sustainable alternatives",
      "icon": "🌱"
    }
  ]
};

// Utility functions
function createElement(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

function getCategoryIcon(categoryName) {
  const category = applicationData.categories.find(cat => cat.name === categoryName);
  return category ? category.icon : '📝';
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  return '⭐'.repeat(fullStars) + (halfStar ? '⭐' : '') + '☆'.repeat(emptyStars);
}

// Render functions
function renderFeaturedPosts() {
  const container = document.getElementById('featured-posts-grid');
  if (!container) return;

  container.innerHTML = '';
  
  applicationData.samplePosts.forEach(post => {
    const postCard = createElement('article', 'post-card');
    
    postCard.innerHTML = `
      <div class="post-card__image">
        ${getCategoryIcon(post.category)}
      </div>
      <div class="post-card__content">
        <span class="post-card__category">${post.category}</span>
        <h3 class="post-card__title">${post.title}</h3>
        <p class="post-card__excerpt">${post.excerpt}</p>
        <div class="post-card__meta">
          <span>${post.author} • ${post.date}</span>
          <span>${post.readTime}</span>
        </div>
      </div>
    `;
    
    postCard.addEventListener('click', () => {
      showPostDetails(post);
    });
    
    container.appendChild(postCard);
  });
}

function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  container.innerHTML = '';
  
  applicationData.categories.forEach(category => {
    const categoryCard = createElement('div', 'category-card');
    
    categoryCard.innerHTML = `
      <span class="category-card__icon">${category.icon}</span>
      <h3 class="category-card__name">${category.name}</h3>
      <p class="category-card__description">${category.description}</p>
    `;
    
    categoryCard.addEventListener('click', () => {
      filterByCategory(category.name);
    });
    
    container.appendChild(categoryCard);
  });
}

function renderRecipes() {
  const container = document.getElementById('recipes-grid');
  if (!container) return;

  container.innerHTML = '';
  
  applicationData.recipes.forEach(recipe => {
    const recipeCard = createElement('article', 'recipe-card');
    
    recipeCard.innerHTML = `
      <div class="recipe-card__header">
        <h3 class="recipe-card__name">${recipe.name}</h3>
        <div class="recipe-card__rating">
          <span>${generateStars(recipe.rating)}</span>
          <span>${recipe.rating}</span>
        </div>
      </div>
      <div class="recipe-card__content">
        <div class="recipe-card__meta">
          <span class="recipe-card__difficulty">${recipe.difficulty}</span>
          <span>⏱️ ${recipe.time}</span>
        </div>
        <p class="recipe-card__description">${recipe.description}</p>
      </div>
    `;
    
    recipeCard.addEventListener('click', () => {
      showRecipeDetails(recipe);
    });
    
    container.appendChild(recipeCard);
  });
}

// Event handlers
function showPostDetails(post) {
  alert(`Post Details:\n\nTitle: ${post.title}\nCategory: ${post.category}\nAuthor: ${post.author}\nDate: ${post.date}\n\n${post.excerpt}\n\nThis would normally open the full post page!`);
}

function showRecipeDetails(recipe) {
  alert(`Recipe Details:\n\nName: ${recipe.name}\nDifficulty: ${recipe.difficulty}\nTime: ${recipe.time}\nRating: ${recipe.rating}/5\n\n${recipe.description}\n\nThis would normally open the full recipe page with ingredients and instructions!`);
}

function filterByCategory(categoryName) {
  const filteredPosts = applicationData.samplePosts.filter(post => post.category === categoryName);
  
  if (filteredPosts.length > 0) {
    alert(`Filtering by "${categoryName}":\n\n${filteredPosts.map(post => `• ${post.title}`).join('\n')}\n\nThis would normally show only posts from this category!`);
  } else {
    alert(`No posts found in "${categoryName}" category yet. Be the first to contribute!`);
  }
}

function handleSearch() {
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    alert('Please enter a search term!');
    return;
  }
  
  const searchResults = applicationData.samplePosts.filter(post => 
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.category.toLowerCase().includes(query)
  );
  
  const recipeResults = applicationData.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query)
  );
  
  let resultText = `Search Results for "${query}":\n\n`;
  
  if (searchResults.length > 0) {
    resultText += 'Posts:\n' + searchResults.map(post => `• ${post.title}`).join('\n') + '\n\n';
  }
  
  if (recipeResults.length > 0) {
    resultText += 'Recipes:\n' + recipeResults.map(recipe => `• ${recipe.name}`).join('\n');
  }
  
  if (searchResults.length === 0 && recipeResults.length === 0) {
    resultText += 'No results found. Try different keywords!';
  }
  
  alert(resultText);
  searchInput.value = '';
}

function handleCommunityForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const submission = {
    name: formData.get('name') || event.target.querySelector('input[type="text"]').value,
    title: formData.get('title') || event.target.querySelectorAll('input[type="text"]')[1].value,
    category: formData.get('category') || event.target.querySelector('select').value,
    content: formData.get('content') || event.target.querySelector('textarea').value
  };
  
  if (!submission.name || !submission.title || !submission.category || !submission.content) {
    alert('Please fill in all required fields!');
    return;
  }
  
  alert(`Thanks ${submission.name}! Your submission "${submission.title}" in the ${submission.category} category has been received.\n\nWe'll review it and get back to you soon. Keep experimenting! 🔬`);
  
  event.target.reset();
  
  // Add a temporary success message
  const successMsg = createElement('div', 'status status--success', '✅ Submission received! Thanks for contributing to our community.');
  event.target.appendChild(successMsg);
  
  setTimeout(() => {
    successMsg.remove();
  }, 5000);
}

function handleNewsletterForm(event) {
  event.preventDefault();
  
  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput.value.trim();
  
  if (!email) {
    alert('Please enter a valid email address!');
    return;
  }
  
  alert(`Thanks for subscribing! 🎉\n\nYou'll now receive our weekly food science newsletter at ${email}.\n\nGet ready for amazing experiments, recipes, and discoveries!`);
  
  emailInput.value = '';
  
  // Add temporary success message
  const successMsg = createElement('div', 'status status--success', '✅ Successfully subscribed to newsletter!');
  event.target.appendChild(successMsg);
  
  setTimeout(() => {
    successMsg.remove();
  }, 3000);
}

function handleNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('nav__link--active'));
      
      // Add active class to clicked link
      link.classList.add('nav__link--active');
      
      // Get the target section
      const target = link.getAttribute('href').substring(1);
      
      // Handle different navigation actions
      switch(target) {
        case 'home':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'blog':
          document.querySelector('.featured-posts').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'recipes':
          document.querySelector('.recipes').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'research':
          alert('Research section would show peer-reviewed food science papers and our lab findings!');
          break;
        case 'community':
          document.querySelector('.community-highlights').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'submit':
          document.querySelector('.community-form').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          alert('About Us:\n\nYou Goddammit Labs is a community-driven platform making food science accessible and fun for everyone. We believe that understanding the science behind our food leads to better cooking, healthier choices, and more sustainable practices.\n\nJoin our community of curious food enthusiasts!');
          break;
        case 'contact':
          alert('Contact Us:\n\n📧 Email: hello@yougoddammitlabs.com\n🐦 Twitter: @YouGoddammitLabs\n📷 Instagram: @yougoddammitlabs\n\nWe love hearing from our community!');
          break;
      }
    });
  });
}

function addHeroButtonHandlers() {
  const heroButtons = document.querySelectorAll('.hero__buttons .btn');
  
  heroButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.includes('Explore')) {
        document.querySelector('.featured-posts').scrollIntoView({ behavior: 'smooth' });
      } else if (button.textContent.includes('Submit')) {
        document.querySelector('.community-form').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function addCommentInteractions() {
  const commentButtons = document.querySelectorAll('.comment__btn');
  
  commentButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent.includes('👍')) {
        const currentLikes = parseInt(button.textContent.match(/\d+/)[0]);
        button.textContent = `👍 ${currentLikes + 1}`;
        button.style.background = 'var(--brand-secondary)';
        button.style.color = 'white';
      } else if (button.textContent.includes('Reply')) {
        alert('Reply feature would open a comment composer here!');
      }
    });
  });
}

function addScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.post-card, .category-card, .recipe-card, .stat-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize the application
function initializeApp() {
  console.log('🔬 You Goddammit Labs - Initializing...');
  
  // Render dynamic content
  renderFeaturedPosts();
  renderCategories();
  renderRecipes();
  
  // Add event listeners
  handleNavigation();
  addHeroButtonHandlers();
  addCommentInteractions();
  
  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
  }
  
  // Form handlers
  const communityForm = document.getElementById('community-form');
  if (communityForm) {
    communityForm.addEventListener('submit', handleCommunityForm);
  }
  
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterForm);
  }
  
  // Add scroll effects
  addScrollEffects();
  
  console.log('✅ You Goddammit Labs - Ready to go!');
  
  // Show welcome message
  setTimeout(() => {
    console.log('🎉 Welcome to You Goddammit Labs! Where food science meets fun!');
  }, 1000);
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Additional utility functions for enhanced interactivity
function addRandomQuote() {
  const quotes = [
    "Science is the best thing humans have invented! 🔬",
    "Every recipe is just chemistry in disguise! ⚗️",
    "Fermentation is basically controlled spoilage - and it's awesome! 🦠",
    "Molecular gastronomy: Making food weird since forever! 🧪",
    "The kitchen is the best laboratory! 👨‍🍳"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`💡 Food Science Fact: ${randomQuote}`);
}

// Add some fun console messages
console.log(`
🔬 You Goddammit Labs 🔬
=====================
Making food science fun since 2025!

Try these console commands:
- addRandomQuote() for a fun science fact
- applicationData to see all our content

Happy experimenting! 🧪
`);

// Call random quote after a delay
setTimeout(addRandomQuote, 3000);