import{_ as s,o as n,c as a,e}from"./app.f4424e1f.js";const l={},i=e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker" aria-hidden="true">#</a> \u5B89\u88C5 Docker</h2><p>\u4E0B\u9762\u7684\u8FC7\u7A0B\u7528\u4E8E\u5728 Ubuntu \u4E0A\u5B89\u88C5 Docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># \u5378\u8F7D\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo apt-get remove docker docker-engine docker.io containerd runc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u5B89\u88C5\u5FC5\u8981\u7684\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo apt-get install \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    apt-transport-https \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    ca-certificates \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    curl \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    gnupg-agent \\</span></span>
<span class="line"><span style="color:#D4D4D4;">    software-properties-common</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u6DFB\u52A0 Docker \u7684\u5B98\u65B9 GPG \u5BC6\u94A5</span></span>
<span class="line"><span style="color:#D4D4D4;">curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u901A\u8FC7\u641C\u7D22\u6307\u7EB9\u7684\u540E8\u4E2A\u5B57\u7B26\uFF0C\u9A8C\u8BC1\u662F\u5426\u62E5\u6709\u5E26\u6709\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo apt-key fingerprint 0EBFCD88</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u6DFB\u52A0 docker \u955C\u50CF\u6E90\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo add-apt-repository \\</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span><span style="color:#CE9178;">&quot;deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/ </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#CE9178;">  $(lsb_release -cs) </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#CE9178;">  stable&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u66F4\u65B0\u6E90</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo apt-get update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u5B89\u88C5 Docker-Community Engine</span></span>
<span class="line"><span style="color:#D4D4D4;">sudo apt-get install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u5C06\u5F53\u524D\u7528\u6237\u6DFB\u52A0\u5230 docker \u7528\u6237\u7EC4\uFF0C\u8FD9\u6837\u4F7F\u7528 docker \u547D\u4EE4\u5C31\u4E0D\u7528\u52A0 sudo </span></span>
<span class="line"><span style="color:#D4D4D4;">sudo gpasswd -a USERNAME docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F</span></span>
<span class="line"><span style="color:#D4D4D4;">docker -V</span></span>
<span class="line"><span style="color:#D4D4D4;">docker info</span></span>
<span class="line"><span style="color:#D4D4D4;">docker run hello-world</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dokcer-\u955C\u50CF\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dokcer-\u955C\u50CF\u64CD\u4F5C" aria-hidden="true">#</a> Dokcer \u955C\u50CF\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docker images</span></span>
<span class="line"><span style="color:#D4D4D4;">docker pull </span></span>
<span class="line"><span style="color:#D4D4D4;">docker rmi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">docker save -o IMAGE_NAME XXX.tar</span></span>
<span class="line"><span style="color:#D4D4D4;">docker load -i XXX.tar</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-\u5BB9\u5668\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u64CD\u4F5C" aria-hidden="true">#</a> Docker \u5BB9\u5668\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docker run -p -d  </span></span>
<span class="line"><span style="color:#D4D4D4;">docker ps</span></span>
<span class="line"><span style="color:#D4D4D4;">docker </span><span style="color:#DCDCAA;">exec</span><span style="color:#D4D4D4;"> -it </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-compose</h2>`,10),c=[i];function r(d,p){return n(),a("div",null,c)}var t=s(l,[["render",r],["__file","docker.html.vue"]]);export{t as default};
