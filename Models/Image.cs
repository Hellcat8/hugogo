using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hugo.Models
{
    public class Image
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Descr { get; set; }
        public string UniqueName { get; set; }
        public string Link { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
