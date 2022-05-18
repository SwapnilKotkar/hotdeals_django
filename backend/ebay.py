from requests_html import HTMLSession
from bs4 import BeautifulSoup
import requests
import json


apiURL = "https://www.ebay.com/globaldeals"

s = HTMLSession()

def getLinks(url):

    r = s.get(url=url)
    soup = BeautifulSoup(r.text, "html.parser")

    results = [link.attrs['href'] for link in soup.select("div.ebayui-dne-item-featured-card div.row div.col div.dne-itemtile a") ]

    links = []
    [links.append(link) for link in results if link not in links]
    return links


def getData(links):

    productData = {}

    for link in links:

        title= ""
        price = ""

        r = s.get(link)
        soup = BeautifulSoup(r.text, "html.parser")

        titleResult = soup.find('div', class_="x-item-title")
        priceResult = soup.find('span', id= "prcIsum")

        if titleResult and priceResult:

            title = titleResult.get_text()
            productData["title"] = title.strip()

            price = priceResult.get_text()
            productData["price"] = price.strip()

        if productData:
            deals.append(productData)

            url = 'http://127.0.0.1:8000/dealCreate/'
            json_data=json.dumps(productData)
            r=requests.post(url=url,data=json_data)
            data=r.json()
            print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            print(data)



links = getLinks(apiURL)

deals = []
getData(links)
print('*********************************************************************************')
print(deals)
print('***********************************************************************************')

print(len(deals))