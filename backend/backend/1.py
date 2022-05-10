from time import sleep
from requests_html import HTMLSession

baseURL = "https://www.amazon.in"

# url = "https://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&ref_=sv_gb_1"
url2 = "https://www.amazon.in/deal/46fbd96b?showVariations=true&ref=dlx_deals_gd_dcl_img_0_46fbd96b_dt_sl15_72"
# url3 = "https://www.amazon.in/deals?ref_=nav_cs_gb"

def getData(url):
    s = HTMLSession()
    r = s.get(url)
    r.html.render(sleep=1)

    result = r.html.find('#octopus-dlp-asin-stream > ul > li > span > div > div > a')

    # result = r.html.find('div.octopus-dlp-price > div.octopus-widget-price')

    # result2 = r.html.find('.Grid-module__grid_1-xkdMK87Hfx0wjqVxAGcI > div > div > div > a')


    # print(products)
    return result


results = getData(url2)

products = []

for data in results:
    products.append(data)
    # print(baseURL + data.attrs['href'])

print(products)