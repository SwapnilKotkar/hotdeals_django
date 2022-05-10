from requests_html import HTMLSession
from bs4 import BeautifulSoup
import requests
import db
import time

# created connection with mongoDB
db.connection()


session = HTMLSession()


url = "https://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&ref_=sv_gb_1"

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36', 'Accept-Encoding': 'gzip, deflate', 'Accept': '*/*', 'Connection': 'keep-alive'}

headers = {
    'authority': 'www.amazon.in',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'en-US,en;q=0.9'  
}


def getdata(url, headers):
    r= session.get('https://www.amazon.in/gp/goldbox/all-deals/?ie=UTF8&ref_=sv_gb_1', headers=headers)

    time.sleep(3)

    htmlContent = r.content
    soup = BeautifulSoup(htmlContent, 'html.parser')
    return soup


def getdeals(soup):
    data= soup.find("div",{"id" : 'anonCarousel1'})
    print(data)


soup = getdata(url, headers)
getdeals(soup)