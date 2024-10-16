$(document).ready(function() {
    // Example: Smooth Scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Example: Toggle the mobile menu
    $('.mobile-menu-toggler').on('click', function() {
        $('.mobile-menu-container').toggleClass('active');
    });

    // Example: Add to cart functionality
    $('.btn-add-cart').on('click', function(e) {
        e.preventDefault();
        var productId = $(this).data('product-id');
        
        $.ajax({
            url: '/cart/add.js',
            type: 'POST',
            data: { id: productId, quantity: 1 },
            dataType: 'json',
            success: function() {
                // Update cart count
                updateCartCount();
                alert('Product added to cart!');
            },
            error: function() {
                alert('Error adding product to cart.');
            }
        });
    });

    // Example: Function to update cart count in the header
    function updateCartCount() {
        $.getJSON('/cart.js', function(cart) {
            var itemCount = cart.item_count;
            $('.cart-count').text(itemCount);
        });
    }

    // Call the function on page load to set initial cart count
    updateCartCount();
});
