# Surge Deployment Configuration for repo "concepts-of-angular2"
----

- No need of **index.html**, **200.html** is enough for surge. 
- Surge just looks for it before looking for 400.html file.
- For more information, refer to the [official documentation](https://surge.sh/help/)
- I am keeping **CNAME** file in this folder. It has my domain name, this prevents `surge` command from asking the domain name each time.