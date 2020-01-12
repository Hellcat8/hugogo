using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hugo.Models
{
    public class Article
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ShortDecr { get; set; }
        public int Img { get; set;}
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
