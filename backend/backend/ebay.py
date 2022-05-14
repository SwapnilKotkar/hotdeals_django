import pymongo
from requests_html import HTMLSession
from bs4 import BeautifulSoup


# created connection with mongoDB.............

client = pymongo.MongoClient("mongodb://localhost:27017/")

db = client["deals"]
collection = db["ebayDeals"]

# -----------------------------------------------------

url = "https://www.ebay.com/globaldeals"

s = HTMLSession()

def getLinks(url):

    r = s.get(url=url)
    soup = BeautifulSoup(r.text, "html.parser")

    results = [link.attrs['href'] for link in soup.select("div.ebayui-dne-item-featured-card div.row div.col div.dne-itemtile a") ]

    links = []
    [links.append(link) for link in results if link not in links]
    return links


def getData(links):
    for link in links:

        title= ""
        price = ""
        productData = {}

        r = s.get(link)
        soup = BeautifulSoup(r.text, "html.parser")

        titleResult = soup.find('div', class_="x-item-title")
        # print(titleDiv)
        # productTitle = soup.find('span', class_= "ux-textspans").get_text()
        priceResult = soup.find('span', id= "prcIsum")

        if titleResult and priceResult:

            title = titleResult.get_text()
            productData["title"] = title.strip()

            price = priceResult.get_text()
            productData["price"] = price.strip()

        if productData:
            deals.append(productData)




links = getLinks(url)

deals = []
getData(links)
print(deals)
print(len(deals))

collection.insert_many(deals)