// xử lý tạo background cho header khi scroll
$(document).ready(function () {
    let header = $('.header-home');

    $(document).on('scroll', function () {
        let scrollY = window.pageYOffset;
        if (scrollY > 0) {
            header.addClass('active'); // Sử dụng jQuery để thêm class
        } else {
            header.removeClass('active'); // Sử dụng jQuery để xóa class
        }
    });
    // console.log($('.menu-item'));
    $('.menu-item').hover(
        function () {
            header.addClass('active');
        },
        function () {
            if (scrollY > 0) {
                header.addClass('active'); // Sử dụng jQuery để thêm class
            } else {
                header.removeClass('active'); // Sử dụng jQuery để xóa class
            }
        }
    );
    $('.male').hover(
        function () {
            $('.submenu-nam').addClass('active')
        },
        function () {
            $('.submenu-nam').removeClass('active')

        }
    );

    $('.female').hover(
        function () {
            $('.submenu-nu').addClass('active')
        },
        function () {
            $('.submenu-nu').removeClass('active')
        }
    );

    $('.submenu-nam').hover(
        function () {
            header.addClass('active');
        },
        function () {
            if (scrollY > 0) {
                header.addClass('active'); // Sử dụng jQuery để thêm class
            } else {
                header.removeClass('active'); // Sử dụng jQuery để xóa class
            }
        }
    )
    $('.submenu-nu').hover(
        function () {
            header.addClass('active');
        },
        function () {
            if (scrollY > 0) {
                header.addClass('active'); // Sử dụng jQuery để thêm class
            } else {
                header.removeClass('active'); // Sử dụng jQuery để xóa class
            }
        }
    )


    let backtotop = $('.totop');
    $(document).on('scroll', function () {
        let scrollY = window.pageYOffset;
        if (scrollY > 30) {
            backtotop.addClass('active')
        } else {
            backtotop.removeClass('active')
        }
    });
    backtotop.on('click', function () {
        window.scrollTo({
            top: 0
        })
    })



    // xử lý pupop cart
    let btnCart = $('.sub-menu-cart');
    let popCart = $('.popup__cart');
    let btnPopCarrtClose = $('.cart__top-close');
    let popWrapt = $('.popup__cart-wrap')
    btnCart.on('click', function () {
        popCart.addClass('active')
    })
    btnPopCarrtClose.on('click', function () {
        popCart.removeClass('active')
    })
    popCart.on('click', function () {
        popCart.removeClass('active')
    })

    popWrapt.on('click', function (e) {
        e.stopPropagation()
    })

    // xử lý pupop menu mobile
    let btnMenuMobile = $('.btn-menu-mobile');
    let popMenuMobile = $('.popup__menu-mobile');
    let btnCloseMenuMObile = $('.menu__mobile-close');
    btnMenuMobile.on('click', function () {
        popMenuMobile.addClass('active')
    })
    btnCloseMenuMObile.on('click', function () {
        popMenuMobile.removeClass('active')
    })

     // xử lý pupop accoung mobile
     let btnAccountMobile = $('.btn-open-nav');
     let btnPrevAccountMobile = $('.account__top-icon')
     let popAccountMobile = $('.account__nav');
     let btnCloseAccountMObile = $('.account__top-close');
     btnAccountMobile.on('click', function () {
         popAccountMobile.fadeIn();
     })
     btnCloseAccountMObile.on('click', function () {
         popAccountMobile.fadeOut()
     })
     btnPrevAccountMobile.on('click', function () {
        popAccountMobile.fadeOut()
    })

 

    // xử lý pupop search mobile
    let btnSearchMobile = $('.sub-menu-search');
    let popSearchMobile = $('.popup__search-mobile');
    let btnCloseSearchMObile = $('.search__mobile-close');
    btnSearchMobile.on('click', function () {
        popSearchMobile.addClass('active')
    })
    btnCloseSearchMObile.on('click', function () {
        popSearchMobile.removeClass('active')
    })

    // xử lý pupop filter product mobile
    let btnFilterMobile = $('.btn-filter-mobile');
    let popFilterMobile = $('.product__filter');
    let btnCloseFilterMObile = $('.btn-filter-close');
    btnFilterMobile.on('click', function () {
        popFilterMobile.addClass('active')
    })
    btnCloseFilterMObile.on('click', function () {
        popFilterMobile.removeClass('active')
    })


    // xử lý filter mở panel
    $(document).on('click', '.accordion__item-title', function () {
        $(this).next().slideToggle(200);
        $(this).parent().toggleClass('active');
    })


    // xử lý thêm xóa filter 
    $('.panle__item input[type="checkbox"]').change(function () {
        let checkbox = $(this);
        let label = checkbox.next('label').text(); // Lấy nội dung của label
        let listItem = $('.product__filter-list li'); // Lấy danh sách li hiện có
        // Lấy phần tử cha của checkbox
        let accordionItem = $(this).closest('.accordion__item');
        // Lấy text của accordion__item-title
        let titleText = accordionItem.find('.accordion__item-title').text();

        // Kiểm tra nếu checkbox được chọn
        if (checkbox.is(':checked')) {
            // Thêm li mới vào product__filter-list
            $('.product__filter-list').append(`
                <li>
                    <img class="filter__item-close" src="./images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="">
                    <span class="filter__item-name">${titleText}:</span>
                    <span class="filter__item-content">${label}</span>
                </li>
            `);
        } else {
            // Nếu checkbox bị bỏ chọn, xóa li tương ứng
            listItem.each(function () {
                if ($(this).find('.filter__item-content').text() === label) {
                    $(this).remove();
                }
            });
        }
    });

    // Khi nhấn vào nút xóa
    $(document).on('click', '.filter__item-close', function () {
        let listItem = $(this).parent('li');
        let contentText = listItem.find('.filter__item-content').text();

        // Xóa li
        listItem.remove();

        // Tìm checkbox tương ứng và bỏ chọn
        $('.panle__item input[type="checkbox"]').each(function () {
            if ($(this).next('label').text() === contentText) {
                $(this).prop('checked', false); // Bỏ chọn checkbox
            }
        });
    });

    $('.product__button-close').click(function () {
        // Bỏ chọn tất cả các checkbox
        $('.panle__item input[type="checkbox"]').prop('checked', false);

        // Xóa tất cả các li trong product__filter-list
        $('.product__filter-list li').remove();
    });

    // xử lý infor product detail
    let panel = $('.info__item')
    $(document).on('click', '.info__nav li', function () {
        $('.info__nav li').removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        let itemPanel = panel.eq(index);
        panel.removeClass('active');
        itemPanel.addClass('active');
    })

    // xử lý infor product detail
    $('.toggle-password').on('click', function () {
        $(this).toggleClass('active');
        let input = $(this).parent().find('input');
        let type = input.attr('type') === 'password' ? 'text' : 'password';
        input.attr('type', type);
    })

    // xử lý hiện phần thay đổi mật khẩu
    $('#changepass').change(function () {
        if ($(this).is(':checked')) {
            $('.password-contant').slideDown(); // Hiện phần tử khi checkbox được chọn
        } else {
            $('.password-contant').slideUp(); // Ẩn phần tử khi checkbox không được chọn
        }
    });

    // lấy data chọn địa chỉ
    $('.province').each(function () {
        var $province = $(this);
        $.getJSON('https://esgoo.net/api-tinhthanh/1/0.htm', function (data_province) {
            if (data_province.error == 0) {
                $.each(data_province.data, function (key_province, val_province) {
                    $province.append('<option value="' + val_province.id + '">' + val_province.full_name + '</option>');
                });
                $province.change(function (e) {
                    var idprovince = $(this).val();
                    //Lấy quận huyện

                    $.getJSON('https://esgoo.net/api-tinhthanh/2/' + idprovince + '.htm', function (data_district) {
                        if (data_district.error == 0) {
                            var $district = $province.closest('.row').find('.district');
                            $district.html('<option value="0">Chọn Quận/Huyện</option>');
                            $.each(data_district.data, function (key_district, val_district) {
                                $district.append('<option value="' + val_district.id + '">' + val_district.full_name + '</option>');
                            });
                            //Lấy phường xã  
                            $district.change(function (e) {
                                var iddistrict = $(this).val();
                                $.getJSON('https://esgoo.net/api-tinhthanh/3/' + iddistrict + '.htm', function (data_ward) {
                                    if (data_ward.error == 0) {
                                        var $ward = $province.closest('.row').find('.ward');

                                        $ward.html('<option value="0">Chọn Phường/Xã</option>');
                                        $.each(data_ward.data, function (key_ward, val_ward) {
                                            $ward.append('<option value="' + val_ward.id + '">' + val_ward.full_name + '</option>');
                                        });
                                    }
                                });
                            });

                        }
                    });
                });

            }
        });
    })

    // xử lý sao chép địa chỉ
    $('.endow__coppy').on('click', function () {
        const textToCopy = $(this).siblings('.endow__name').text();
        // Sử dụng Clipboard API để sao chép
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Đã sao chép: ' + textToCopy);
            })
            .catch(err => {
                console.error('Không thể sao chép: ', err);
            });
    });


    // Khi nhấn vào một nav-item
    $('.nav-item').on('click', function () {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Thêm class 'active' vào nav-item được nhấn
        $(this).addClass('active');

        // Lấy chỉ số của nav-item được nhấn
        const index = $(this).index('.nav-item');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel tương ứng với chỉ số
        $('.account__panel').eq(index).show();

        // tắt pop nav mobile
        popAccountMobile.fadeOut()
    });


    // Khi nhấn vào info__item-order
    $('#account-edit').on('click', function () {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Tìm và active nav-item có text là "Thông tin cá nhân"
        $('.nav-item').filter(function () {
            return $(this).text().trim() === 'Thông tin cá nhân';
        }).addClass('active');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel thứ 2 (Thông tin cá nhân)
        $('.account__panel').eq(1).show();
        $('#changepass').prop('checked', false).trigger('change');
    });

    // khi nhấn vào changge password 
    $('#account-password').on('click', function () {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Tìm và active nav-item có text là "Thông tin cá nhân"
        $('.nav-item').filter(function () {
            return $(this).text().trim() === 'Thông tin cá nhân';
        }).addClass('active');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel thứ 2 (Thông tin cá nhân)
        $('.account__panel').eq(1).show();

        // Tự động check vào input #changepass và hiển thị phần password-contant
        $('#changepass').prop('checked', true).trigger('change');
    });

    // Khi nhấn vào info__item-order
    $('#address-edit').on('click', function () {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Tìm và active nav-item có text là "Thông tin cá nhân"
        $('.nav-item').filter(function () {
            return $(this).text().trim() === 'Địa chỉ nhận hàng';
        }).addClass('active');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel thứ 2 (Thông tin cá nhân)
        $('.account__panel').eq(2).show();
        $('.address__panel-list').hide();
        $('.address__panel-edit').show();

    });

    $('#address-list').on('click', function () {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Tìm và active nav-item có text là "Thông tin cá nhân"
        $('.nav-item').filter(function () {
            return $(this).text().trim() === 'Địa chỉ nhận hàng';
        }).addClass('active');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel thứ 2 (Thông tin cá nhân)
        $('.account__panel').eq(2).show();
        $('.address__panel-list').show();
        $('.address__panel-edit').hide();

    });

    // Khi nhấn vào nav-item "Địa chỉ nhận hàng"
    $('.nav-item').filter(function () {
        return $(this).text().trim() === 'Địa chỉ nhận hàng';
    }).on('click', function () {
        // Ẩn phần address__panel-edit và hiển thị address__panel-list
        $('.address__panel-edit').hide();
        $('.address__panel-list').show();
        $('.address__panel-add').hide();

    });

    // Khi nhấn vào nút "sữa địa chỉ" ở panel danh sách địa chỉ
    $('.button__address-edit').on('click', function () {
        $('.address__panel-list').hide();
        $('.address__panel-edit').show();
        $('.address__panel-add').hide();

    });

    // Khi nhấn vào nút "thêm địa chỉ" ở panel danh sách địa chỉ
    $('.btn-add-address').on('click', function () {
        $('.address__panel-list').hide();
        $('.address__panel-edit').hide();
        $('.address__panel-add').show();

    });

    // Khi nhấn vào nút quay lại  ở panel đia chỉ
    $('.back-img-address').on('click', function () {
        $('.address__panel-list').show();
        $('.address__panel-edit').hide();
        $('.address__panel-add').hide();

    });


    // // slider  flickity
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        pageDots: false,
        autoPlay: 3000,
        speed: 800,
        draggable: true,
        arrows: false,
        cellAlign: 'left',
        wrapAround: true,
    });

    // peoduct realationship flickity
    let $carousel_porduct = $('.product-wrapt-relateship');
    $carousel_porduct.flickity({
        pageDots: false,
        speed: 700,
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true
    });


    //product detail flickity mobile
    function initFlickityIfMobile() {
        if ($(window).width() <= 768) {
          let $carousel_service = $('.product__service');

          // Kiểm tra nếu chưa khởi tạo Flickity
          if (!$carousel_service.hasClass('flickity-enabled')) {
            $carousel_service.flickity({
                // pageDots: false,
                speed: 700,
                cellAlign: 'left',
                prevNextButtons: false,
            });
          }
        } else {
          // Nếu vượt mobile => destroy Flickity nếu đã có
          let $carousel_service = $('.product__service');
          if ($carousel_service.hasClass('flickity-enabled')) {
            $carousel_service.flickity('destroy');
          }
        }
      }

      // Gọi khi load trang và khi resize
      initFlickityIfMobile();
      $(window).resize(function () {
        initFlickityIfMobile();
      });    


    // chuyển trang khi nhấn vào wishlist 
    // Lấy query parameter từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab'); // Lấy giá trị của 'tab'

    // Nếu tab là 'wishlist', active nav-item và hiển thị panel tương ứng
    if (tab === 'wishlist') {
        // Xóa class 'active' khỏi tất cả các nav-item
        $('.nav-item').removeClass('active');

        // Tìm và active nav-item có text là "Sản phẩm yêu thích"
        $('.nav-item').filter(function () {
            return $(this).text().trim() === 'Sản phẩm yêu thích';
        }).addClass('active');

        // Ẩn tất cả các panel
        $('.account__panel').hide();

        // Hiển thị panel tương ứng với "Sản phẩm yêu thích"
        $('.account__panel').eq(7).show(); // Panel thứ 7 (index 6)
    }



    // xử lý tăng giảm số lượng sản phẩm
    // Khi nhấn vào nút giảm
    $('.quantity-prev').on('click', function () {
        const input = $(this).siblings('.quantity');
        let value = parseInt(input.val());
        const min = parseInt(input.attr('min')) || 1;

        if (value > min) {
            input.val(value - 1);
        }
    });

    // Khi nhấn vào nút tăng
    $('.quantity-next').on('click', function () {
        const input = $(this).siblings('.quantity');
        let value = parseInt(input.val());
        const max = parseInt(input.attr('max')) || 10;

        if (value < max) {
            input.val(value + 1);
        }
    });
})
